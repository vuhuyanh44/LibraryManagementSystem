-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 28, 2023 lúc 06:16 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `library_management_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `authors`
--

CREATE TABLE `authors` (
  `author_id` int(11) NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `date_of_death` datetime DEFAULT NULL,
  `date_of_birth` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `authors`
--

INSERT INTO `authors` (`author_id`, `author_name`, `nationality`, `date_of_death`, `date_of_birth`, `createdAt`, `updatedAt`) VALUES
(1, 'Tô Văn Ban', NULL, NULL, NULL, '2023-04-28 15:11:32', '2023-04-28 15:11:32'),
(2, 'Trần Bình', NULL, NULL, NULL, '2023-04-28 15:11:44', '2023-04-28 15:11:44'),
(3, 'Hồ Đắc Phương', NULL, NULL, NULL, '2023-04-28 15:11:56', '2023-04-28 15:11:56'),
(4, 'Vũ Tuấn', NULL, NULL, NULL, '2023-04-28 15:12:55', '2023-04-28 15:12:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `author_books`
--

CREATE TABLE `author_books` (
  `authorbook_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `bookline_id` int(11) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `author_books`
--

INSERT INTO `author_books` (`authorbook_id`, `createdAt`, `updatedAt`, `bookline_id`, `author_id`) VALUES
(1, '2023-04-28 16:04:09', '2023-04-28 16:04:09', 2, 1),
(2, '2023-04-28 16:04:12', '2023-04-28 16:04:12', 2, 2),
(3, '2023-04-28 16:04:16', '2023-04-28 16:04:16', 3, 2),
(4, '2023-04-28 16:04:20', '2023-04-28 16:04:20', 3, 1),
(5, '2023-04-28 16:04:25', '2023-04-28 16:04:25', 4, 3),
(6, '2023-04-28 16:04:32', '2023-04-28 16:04:32', 5, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `repository_id` int(11) DEFAULT NULL,
  `bookline_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `books`
--

INSERT INTO `books` (`book_id`, `createdAt`, `updatedAt`, `repository_id`, `bookline_id`) VALUES
(4, '2023-04-28 15:55:14', '2023-04-28 15:55:14', 1, 2),
(5, '2023-04-28 15:55:20', '2023-04-28 15:55:20', 1, 3),
(6, '2023-04-28 15:55:24', '2023-04-28 15:55:24', 1, 4),
(7, '2023-04-28 15:55:27', '2023-04-28 15:55:27', 1, 5),
(8, '2023-04-28 15:55:35', '2023-04-28 15:55:35', 2, 5),
(9, '2023-04-28 15:55:38', '2023-04-28 15:55:38', 2, 4),
(10, '2023-04-28 15:55:42', '2023-04-28 15:55:42', 2, 3),
(11, '2023-04-28 15:55:45', '2023-04-28 15:55:45', 3, 3),
(12, '2023-04-28 15:55:48', '2023-04-28 15:55:48', 3, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `book_lines`
--

CREATE TABLE `book_lines` (
  `bookline_id` int(11) NOT NULL,
  `bookline_name` varchar(255) NOT NULL,
  `thumnail` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `publisher_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `book_lines`
--

INSERT INTO `book_lines` (`bookline_id`, `bookline_name`, `thumnail`, `createdAt`, `updatedAt`, `publisher_id`, `category_id`) VALUES
(2, 'Giải tích 1', 'a', '2023-04-28 15:35:01', '2023-04-28 15:35:01', 1, 1),
(3, 'Giải tích 2', 'a', '2023-04-28 15:35:31', '2023-04-28 15:35:31', 3, 1),
(4, 'Nhập môn mạng máy tính', 'a', '2023-04-28 15:36:04', '2023-04-28 15:36:04', 1, 4),
(5, 'Sức bền vật liệu', 'a', '2023-04-28 15:37:09', '2023-04-28 15:37:09', 2, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `borrowing_offlines`
--

CREATE TABLE `borrowing_offlines` (
  `borrowing_id` int(11) NOT NULL,
  `borrowing_date` datetime NOT NULL,
  `return_date` datetime DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `borrowing_offlines`
--

INSERT INTO `borrowing_offlines` (`borrowing_id`, `borrowing_date`, `return_date`, `due_date`, `createdAt`, `updatedAt`, `user_id`, `book_id`) VALUES
(1, '2023-04-28 16:09:23', NULL, '2023-08-06 16:09:23', '2023-04-28 16:09:23', '2023-04-28 16:09:23', 7, 5),
(2, '2023-04-28 16:09:45', NULL, '2023-08-06 16:09:45', '2023-04-28 16:09:45', '2023-04-28 16:09:45', 7, 6),
(3, '2023-04-28 16:09:51', NULL, '2023-08-06 16:09:51', '2023-04-28 16:09:51', '2023-04-28 16:09:51', 7, 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `borrowing_onlines`
--

CREATE TABLE `borrowing_onlines` (
  `borrowing_id` int(11) NOT NULL,
  `borrowing_date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `bookline_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `borrowing_onlines`
--

INSERT INTO `borrowing_onlines` (`borrowing_id`, `borrowing_date`, `createdAt`, `updatedAt`, `user_id`, `bookline_id`) VALUES
(1, '2023-04-28 16:15:59', '2023-04-28 16:15:59', '2023-04-28 16:15:59', 7, 2),
(2, '2023-04-28 16:16:08', '2023-04-28 16:16:08', '2023-04-28 16:16:08', 7, 3),
(3, '2023-04-28 16:16:12', '2023-04-28 16:16:12', '2023-04-28 16:16:12', 7, 4),
(4, '2023-04-28 16:16:17', '2023-04-28 16:16:17', '2023-04-28 16:16:17', 7, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Toán học', 'Toán học', '2023-04-28 14:58:41', '2023-04-28 14:58:41'),
(2, 'Văn học', 'Văn học', '2023-04-28 14:58:50', '2023-04-28 14:58:50'),
(3, 'Khoa học kĩ thuật', 'Khoa học kĩ thuật', '2023-04-28 14:59:14', '2023-04-28 14:59:14'),
(4, 'Công nghệ thông tin', 'Công nghệ thông tin', '2023-04-28 14:59:37', '2023-04-28 14:59:37');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `publishers`
--

CREATE TABLE `publishers` (
  `publisher_id` int(11) NOT NULL,
  `publisher_name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `publishers`
--

INSERT INTO `publishers` (`publisher_id`, `publisher_name`, `address`, `phone`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'NXB ĐHQGHN', 'Xuân Thủy, Cầu giấy, Hà Nội', '0912345678', 'nxbdhqghn@gmail.com', '2023-04-28 15:03:05', '2023-04-28 15:03:05'),
(2, 'NXB Kim Đồng', 'Xuân Thủy, Cầu giấy, Hà Nội', '0912345677', 'nxbkimdong@gmail.com', '2023-04-28 15:03:30', '2023-04-28 15:03:30'),
(3, 'NXB Sông Thương', 'Xuân Thủy, Cầu giấy, Hà Nội', '0912345676', 'nxbsongthuong@gmail.com', '2023-04-28 15:03:54', '2023-04-28 15:03:54');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `repositories`
--

CREATE TABLE `repositories` (
  `repository_id` int(11) NOT NULL,
  `repository_name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `repositories`
--

INSERT INTO `repositories` (`repository_id`, `repository_name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Thư viện C1T', '144 Xuân Thủy, Cầu Giấy, Hà Nội', '2023-04-28 15:06:27', '2023-04-28 15:06:27'),
(2, 'Thư viện Mễ Trì', '182 Lương Thế Vinh, Thanh Xuân, Hà Nội', '2023-04-28 15:06:59', '2023-04-28 15:06:59'),
(3, 'Thư viện KHTN & XHNV', '334 Nguyễn Trãi, Thanh Xuân, Hà Nội', '2023-04-28 15:07:27', '2023-04-28 15:07:27'),
(4, 'Thư viện Ngoại Ngữ', '2 Phạm Văn Đồng, Cầu Giấy, Hà Nội', '2023-04-28 15:08:00', '2023-04-28 15:08:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`, `createdAt`, `updatedAt`) VALUES
(1, 'Người dùng', '2023-04-28 14:48:43', '2023-04-28 14:48:43'),
(2, 'Thủ thư', '2023-04-28 14:48:54', '2023-04-28 14:48:54'),
(3, 'Chuyên viên bổ sung tài liệu', '2023-04-28 14:49:06', '2023-04-28 14:49:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `phone`, `createdAt`, `updatedAt`, `role_id`) VALUES
(1, 'Vu Huy Anh', 'huyhuyanhanh@gmail.com', 'caigido', '0909090909', '2023-04-28 14:49:17', '2023-04-28 14:49:17', 3),
(6, 'Nguyen Quang Anh', 'quangquanganhanh@gmail.com', 'caigido', '0909090786', '2023-04-28 14:50:20', '2023-04-28 14:50:20', 2),
(7, 'Chu Minh Nam', 'minhminhnamnam@gmail.com', 'caigido', '0909090787', '2023-04-28 14:50:48', '2023-04-28 14:50:48', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`author_id`);

--
-- Chỉ mục cho bảng `author_books`
--
ALTER TABLE `author_books`
  ADD PRIMARY KEY (`authorbook_id`),
  ADD KEY `bookline_id` (`bookline_id`),
  ADD KEY `author_id` (`author_id`);

--
-- Chỉ mục cho bảng `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `repository_id` (`repository_id`),
  ADD KEY `bookline_id` (`bookline_id`);

--
-- Chỉ mục cho bảng `book_lines`
--
ALTER TABLE `book_lines`
  ADD PRIMARY KEY (`bookline_id`),
  ADD KEY `publisher_id` (`publisher_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `borrowing_offlines`
--
ALTER TABLE `borrowing_offlines`
  ADD PRIMARY KEY (`borrowing_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Chỉ mục cho bảng `borrowing_onlines`
--
ALTER TABLE `borrowing_onlines`
  ADD PRIMARY KEY (`borrowing_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `bookline_id` (`bookline_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`publisher_id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `repositories`
--
ALTER TABLE `repositories`
  ADD PRIMARY KEY (`repository_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `authors`
--
ALTER TABLE `authors`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `author_books`
--
ALTER TABLE `author_books`
  MODIFY `authorbook_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `book_lines`
--
ALTER TABLE `book_lines`
  MODIFY `bookline_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `borrowing_offlines`
--
ALTER TABLE `borrowing_offlines`
  MODIFY `borrowing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `borrowing_onlines`
--
ALTER TABLE `borrowing_onlines`
  MODIFY `borrowing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `publishers`
--
ALTER TABLE `publishers`
  MODIFY `publisher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `repositories`
--
ALTER TABLE `repositories`
  MODIFY `repository_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `author_books`
--
ALTER TABLE `author_books`
  ADD CONSTRAINT `author_books_ibfk_1` FOREIGN KEY (`bookline_id`) REFERENCES `book_lines` (`bookline_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `author_books_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`repository_id`) REFERENCES `repositories` (`repository_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_2` FOREIGN KEY (`bookline_id`) REFERENCES `book_lines` (`bookline_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `book_lines`
--
ALTER TABLE `book_lines`
  ADD CONSTRAINT `book_lines_ibfk_1` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`publisher_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `book_lines_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `borrowing_offlines`
--
ALTER TABLE `borrowing_offlines`
  ADD CONSTRAINT `borrowing_offlines_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `borrowing_offlines_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `borrowing_onlines`
--
ALTER TABLE `borrowing_onlines`
  ADD CONSTRAINT `borrowing_onlines_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `borrowing_onlines_ibfk_2` FOREIGN KEY (`bookline_id`) REFERENCES `book_lines` (`bookline_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
