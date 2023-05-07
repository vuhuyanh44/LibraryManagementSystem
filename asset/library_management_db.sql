-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: May 07, 2023 at 10:56 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_management_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `author_id` int(11) NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `date_of_death` datetime DEFAULT NULL,
  `date_of_birth` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`author_id`, `author_name`, `nationality`, `date_of_death`, `date_of_birth`, `createdAt`, `updatedAt`) VALUES
(1, 'Tô Văn Ban', 'Việt Nam', NULL, NULL, '2023-04-28 15:11:32', '2023-04-28 15:11:32'),
(2, 'Trần Bình', 'Việt Nam', NULL, NULL, '2023-04-28 15:11:44', '2023-04-28 15:11:44'),
(3, 'Hồ Đắc Phương', 'Việt Nam', NULL, NULL, '2023-04-28 15:11:56', '2023-04-28 15:11:56'),
(4, 'Vũ Tuấn', 'Việt Nam', NULL, NULL, '2023-04-28 15:12:55', '2023-04-28 15:12:55'),
(5, 'Đỗ Thị Hồng Nga', 'Việt Nam', NULL, NULL, '2023-05-07 00:48:09', '2023-05-07 00:48:09'),
(6, 'Hạc Văn Vinh', 'Việt Nam', NULL, NULL, '2023-05-07 00:48:09', '2023-05-07 00:48:09'),
(7, 'Nguyễn Hữu Việt Hưng', 'Việt Nam', NULL, NULL, '2023-05-07 00:53:34', '2023-05-07 00:53:34'),
(8, 'Nguyễn Thị Thúy Vân', 'Việt Nam', NULL, NULL, '2023-05-07 01:00:46', '2023-05-07 01:00:46'),
(9, 'Nguyễn Anh Tuấn', 'Việt Nam', NULL, NULL, '2023-05-07 01:00:46', '2023-05-07 01:00:46'),
(10, 'Đỗ Đức Giáo', 'Việt Nam', NULL, NULL, '2023-05-07 01:16:10', '2023-05-07 01:16:10'),
(11, 'Nguyễn Thủy Thanh', 'Việt Nam', NULL, NULL, '2023-05-07 01:19:24', '2023-05-07 01:19:24'),
(12, 'Phan Đình Diệu', 'Việt Nam', NULL, NULL, '2023-05-07 01:22:33', '2023-05-07 01:22:33'),
(13, 'Phí Mạnh Ban', 'Việt Nam', NULL, NULL, '2023-05-07 01:34:25', '2023-05-07 01:34:25'),
(14, 'Trần Văn Trản', 'Việt Nam', NULL, NULL, '2023-05-07 01:38:18', '2023-05-07 01:38:18'),
(15, 'Tạ Văn Đĩnh', 'Việt Nam', NULL, NULL, '2023-05-07 01:42:26', '2023-05-07 01:42:26'),
(16, 'John Kandiri', 'Africa', NULL, NULL, '2023-05-07 01:50:37', '2023-05-07 01:50:37'),
(17, 'Viktor Mayer-Schonberger', 'UK', NULL, NULL, '2023-05-07 01:55:27', '2023-05-07 01:55:27'),
(18, 'John Hohenberg', 'US', NULL, NULL, '2023-05-07 01:58:57', '2023-05-07 01:58:57'),
(19, 'Lê Minh Hoàng', 'Việt Nam', NULL, NULL, '2023-05-07 02:02:10', '2023-05-07 02:02:10'),
(20, 'Vũ Hữu Tiệp', 'Việt Nam', NULL, NULL, '2023-05-07 02:04:58', '2023-05-07 02:04:58'),
(21, 'John Rossman', 'US', NULL, NULL, '2023-05-07 02:10:47', '2023-05-07 02:10:47'),
(22, 'William L.Simon', 'US', NULL, NULL, '2023-05-07 02:12:49', '2023-05-07 02:12:49'),
(23, 'Lê Giáng', 'Việt Nam', NULL, NULL, '2023-05-07 09:12:43', '2023-05-07 09:12:43'),
(24, 'Michio Kaku', 'Việt Nam', NULL, NULL, '2023-05-07 09:15:05', '2023-05-07 09:15:05'),
(25, 'Phạm Khánh Tùng', 'Việt Nam', NULL, NULL, '2023-05-07 09:17:00', '2023-05-07 09:17:00'),
(26, 'Amarasiri Weeraratne', 'Colombia', NULL, NULL, '2023-05-07 09:19:59', '2023-05-07 09:19:59'),
(27, 'Vô Hữu', 'Việt Nam', NULL, NULL, '2023-05-07 09:21:40', '2023-05-07 09:21:40'),
(28, 'Lỗ Tấn', 'Trung Quốc', NULL, NULL, '2023-05-07 09:24:52', '2023-05-07 09:24:52'),
(29, 'Mori Ogai', 'Nhật Bản', NULL, NULL, '2023-05-07 09:27:22', '2023-05-07 09:27:22'),
(30, 'Việt Thanh Nguyễn', 'Việt Nam', NULL, NULL, '2023-05-07 09:29:28', '2023-05-07 09:29:28'),
(31, 'Địch Hoa', 'Trung Quốc', NULL, NULL, '2023-05-07 09:31:21', '2023-05-07 09:31:21'),
(32, 'Han Kang', 'Hàn Quốc', NULL, NULL, '2023-05-07 09:32:47', '2023-05-07 09:32:47'),
(33, 'Thạch Lam', 'Việt Nam', NULL, NULL, '2023-05-07 09:35:56', '2023-05-07 09:35:56'),
(34, 'Sái Tuấn', 'Việt Nam', NULL, NULL, '2023-05-07 09:37:38', '2023-05-07 09:37:38'),
(35, 'Việt Quang', 'Việt Nam', NULL, NULL, '2023-05-07 09:40:53', '2023-05-07 09:40:53'),
(36, 'Võ Tuấn Cường', 'Việt Nam', NULL, NULL, '2023-05-07 09:42:58', '2023-05-07 09:42:58'),
(37, 'Brian Tracy', 'US', NULL, NULL, '2023-05-07 09:44:35', '2023-05-07 09:44:35'),
(38, 'Adam khoo', 'Singapore', NULL, NULL, '2023-05-07 09:47:00', '2023-05-07 09:47:00'),
(39, 'Dale Carnegie', 'US', NULL, NULL, '2023-05-07 09:49:30', '2023-05-07 09:49:30'),
(40, 'Martin Manser', 'US', NULL, NULL, '2023-05-07 09:51:11', '2023-05-07 09:51:11'),
(41, 'Nguyễn Hoàng Ánh', 'Việt Nam', NULL, NULL, '2023-05-07 09:52:45', '2023-05-07 09:52:45'),
(42, 'Kiên Trần', 'Việt Nam', NULL, NULL, '2023-05-07 09:55:18', '2023-05-07 09:55:18'),
(43, 'Nguyễn Tham Tân', 'Việt Nam', NULL, NULL, '2023-05-07 09:56:58', '2023-05-07 09:56:58'),
(44, 'Công Kim Thắng', 'Việt Nam', NULL, NULL, '2023-05-07 09:57:14', '2023-05-07 09:57:14'),
(45, 'Nguyễn Thị Tuyết', 'Việt Nam', NULL, NULL, '2023-05-07 09:58:46', '2023-05-07 09:58:46'),
(46, 'Vương Học Điền', 'Trung Quốc', NULL, NULL, '2023-05-07 10:01:15', '2023-05-07 10:01:15'),
(47, 'Quách Tuấn Khanh', 'Trung Quốc', NULL, NULL, '2023-05-07 10:03:50', '2023-05-07 10:03:50'),
(48, 'Satoru Tsubota', 'Nhật Bản', NULL, NULL, '2023-05-07 10:05:15', '2023-05-07 10:05:15'),
(49, 'Hoàng Vũ', 'Việt Nam', NULL, NULL, '2023-05-07 10:06:20', '2023-05-07 10:06:20'),
(50, 'Trần Viết Hoài Đồng', 'Việt Nam', NULL, NULL, '2023-05-07 10:07:43', '2023-05-07 10:07:43'),
(51, 'Al Ries', 'Ấn độ', NULL, NULL, '2023-05-07 12:58:00', '2023-05-07 12:58:00'),
(52, 'Steve Cone', 'US', NULL, NULL, '2023-05-07 12:58:00', '2023-05-07 12:58:00'),
(53, 'Nhất Ly', 'Trung Quốc', NULL, NULL, '2023-05-07 12:58:00', '2023-05-07 12:58:00'),
(54, 'Eric Ries', 'Ấn độ', NULL, NULL, '2023-05-07 12:58:00', '2023-05-07 12:58:00'),
(55, 'Tạ Ngọc Ái', 'Việt Nam', NULL, NULL, '2023-05-07 12:58:00', '2023-05-07 12:58:00'),
(56, 'Guy Kawasaki', 'Nhật Bản', NULL, NULL, '2023-05-07 12:58:00', '2023-05-07 12:58:00'),
(57, 'Paul L.Marciano', 'US', NULL, NULL, '2023-05-07 12:58:00', '2023-05-07 12:58:00'),
(58, 'Julian Bagini', 'US', NULL, NULL, '2023-05-07 13:14:59', '2023-05-07 13:14:59'),
(59, 'Nhậm Học Minh', 'Việt Nam', NULL, NULL, '2023-05-07 13:14:59', '2023-05-07 13:14:59'),
(60, 'Trang Tử', 'Trung Quốc', NULL, NULL, '2023-05-07 13:14:59', '2023-05-07 13:14:59'),
(61, 'Hamvas Béla', 'Pháp', NULL, NULL, '2023-05-07 13:14:59', '2023-05-07 13:14:59'),
(62, 'Marcel Mauss', 'UK', NULL, NULL, '2023-05-07 13:14:59', '2023-05-07 13:14:59'),
(63, 'Nguyễn Văn Trung', 'Việt Nam', NULL, NULL, '2023-05-07 13:14:59', '2023-05-07 13:14:59');

-- --------------------------------------------------------

--
-- Table structure for table `author_books`
--

CREATE TABLE `author_books` (
  `authorbook_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `bookline_id` int(11) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `author_books`
--

INSERT INTO `author_books` (`authorbook_id`, `createdAt`, `updatedAt`, `bookline_id`, `author_id`) VALUES
(1, '2023-04-28 16:04:09', '2023-04-28 16:04:09', 2, 1),
(2, '2023-04-28 16:04:12', '2023-04-28 16:04:12', 2, 2),
(3, '2023-04-28 16:04:16', '2023-04-28 16:04:16', 3, 2),
(4, '2023-04-28 16:04:20', '2023-04-28 16:04:20', 3, 1),
(5, '2023-04-28 16:04:25', '2023-04-28 16:04:25', 4, 3),
(6, '2023-04-28 16:04:32', '2023-04-28 16:04:32', 5, 4),
(7, '2023-05-07 00:50:47', '2023-05-07 00:50:47', 1, 5),
(8, '2023-05-07 00:50:47', '2023-05-07 00:50:47', 1, 6),
(9, '2023-05-07 00:55:43', '2023-05-07 00:55:43', 6, 7),
(10, '2023-05-07 01:01:28', '2023-05-07 01:01:28', 7, 8),
(11, '2023-05-07 01:01:28', '2023-05-07 01:01:28', 7, 9),
(12, '2023-05-07 01:16:36', '2023-05-07 01:16:36', 8, 10),
(13, '2023-05-07 01:19:36', '2023-05-07 01:19:36', 9, 11),
(14, '2023-05-07 01:22:51', '2023-05-07 01:22:51', 10, 12),
(15, '2023-05-07 01:34:36', '2023-05-07 01:34:36', 11, 13),
(16, '2023-05-07 01:38:26', '2023-05-07 01:38:26', 12, 14),
(17, '2023-05-07 01:42:42', '2023-05-07 01:42:42', 13, 15),
(18, '2023-05-07 01:50:48', '2023-05-07 01:50:48', 14, 16),
(19, '2023-05-07 01:55:44', '2023-05-07 01:55:44', 15, 17),
(20, '2023-05-07 01:59:14', '2023-05-07 01:59:14', 16, 18),
(21, '2023-05-07 02:02:20', '2023-05-07 02:02:20', 17, 19),
(22, '2023-05-07 02:05:10', '2023-05-07 02:05:10', 18, 20),
(23, '2023-05-07 02:10:59', '2023-05-07 02:10:59', 19, 21),
(24, '2023-05-07 02:13:02', '2023-05-07 02:13:02', 20, 22),
(25, '2023-05-07 09:12:55', '2023-05-07 09:12:55', 21, 23),
(26, '2023-05-07 09:15:17', '2023-05-07 09:15:17', 22, 24),
(27, '2023-05-07 09:17:10', '2023-05-07 09:17:10', 23, 25),
(28, '2023-05-07 09:20:08', '2023-05-07 09:20:08', 24, 26),
(29, '2023-05-07 09:21:48', '2023-05-07 09:21:48', 25, 27),
(30, '2023-05-07 09:25:07', '2023-05-07 09:25:07', 26, 28),
(31, '2023-05-07 09:27:39', '2023-05-07 09:27:39', 27, 29),
(32, '2023-05-07 09:29:38', '2023-05-07 09:29:38', 28, 30),
(33, '2023-05-07 09:31:31', '2023-05-07 09:31:31', 29, 31),
(34, '2023-05-07 09:33:58', '2023-05-07 09:33:58', 30, 32),
(35, '2023-05-07 09:36:05', '2023-05-07 09:36:05', 31, 33),
(36, '2023-05-07 09:37:46', '2023-05-07 09:37:46', 32, 34),
(37, '2023-05-07 09:41:01', '2023-05-07 09:41:01', 33, 35),
(38, '2023-05-07 09:43:16', '2023-05-07 09:43:16', 34, 36),
(39, '2023-05-07 09:44:44', '2023-05-07 09:44:44', 35, 37),
(40, '2023-05-07 09:47:09', '2023-05-07 09:47:09', 36, 38),
(41, '2023-05-07 09:49:38', '2023-05-07 09:49:38', 37, 39),
(42, '2023-05-07 09:51:22', '2023-05-07 09:51:22', 38, 40),
(43, '2023-05-07 09:52:55', '2023-05-07 09:52:55', 39, 41),
(44, '2023-05-07 09:55:29', '2023-05-07 09:55:29', 40, 42),
(45, '2023-05-07 09:57:32', '2023-05-07 09:57:32', 41, 43),
(46, '2023-05-07 09:57:32', '2023-05-07 09:57:32', 41, 44),
(47, '2023-05-07 09:58:54', '2023-05-07 09:58:54', 42, 45),
(48, '2023-05-07 10:01:23', '2023-05-07 10:01:23', 43, 46),
(49, '2023-05-07 10:04:02', '2023-05-07 10:04:02', 44, 47),
(50, '2023-05-07 10:05:22', '2023-05-07 10:05:22', 45, 48),
(51, '2023-05-07 10:06:27', '2023-05-07 10:06:27', 46, 49),
(52, '2023-05-07 10:07:52', '2023-05-07 10:07:52', 47, 50),
(53, '2023-05-07 12:59:59', '2023-05-07 12:59:59', 48, 51),
(54, '2023-05-07 12:59:59', '2023-05-07 12:59:59', 49, 52),
(55, '2023-05-07 12:59:59', '2023-05-07 12:59:59', 50, 53),
(56, '2023-05-07 12:59:59', '2023-05-07 12:59:59', 51, 54),
(57, '2023-05-07 12:59:59', '2023-05-07 12:59:59', 52, 55),
(58, '2023-05-07 12:59:59', '2023-05-07 12:59:59', 53, 56),
(59, '2023-05-07 12:59:59', '2023-05-07 12:59:59', 54, 57),
(60, '2023-05-07 13:16:29', '2023-05-07 13:16:29', 62, 58),
(61, '2023-05-07 13:16:29', '2023-05-07 13:16:29', 63, 59),
(62, '2023-05-07 13:16:29', '2023-05-07 13:16:29', 64, 60),
(63, '2023-05-07 13:16:29', '2023-05-07 13:16:29', 65, 61),
(64, '2023-05-07 13:16:29', '2023-05-07 13:16:29', 66, 62),
(65, '2023-05-07 13:16:29', '2023-05-07 13:16:29', 67, 2),
(66, '2023-05-07 13:16:29', '2023-05-07 13:16:29', 68, 63);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `repository_id` int(11) DEFAULT NULL,
  `Idle` tinyint(1) NOT NULL,
  `bookline_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `createdAt`, `updatedAt`, `repository_id`, `Idle`, `bookline_id`) VALUES
(1, '2023-05-06 20:08:49', '2023-05-06 20:08:49', 1, 1, 1),
(2, '2023-05-06 20:08:49', '2023-05-06 20:08:49', 2, 1, 1),
(3, '2023-05-06 20:11:15', '2023-05-06 20:11:15', 3, 1, 4),
(4, '2023-04-28 15:55:14', '2023-04-28 15:55:14', 1, 1, 2),
(5, '2023-04-28 15:55:20', '2023-04-28 15:55:20', 1, 0, 3),
(6, '2023-04-28 15:55:24', '2023-04-28 15:55:24', 1, 0, 4),
(7, '2023-04-28 15:55:27', '2023-04-28 15:55:27', 1, 0, 5),
(8, '2023-04-28 15:55:35', '2023-04-28 15:55:35', 2, 1, 5),
(9, '2023-04-28 15:55:38', '2023-04-28 15:55:38', 2, 1, 4),
(10, '2023-04-28 15:55:42', '2023-04-28 15:55:42', 2, 1, 3),
(11, '2023-04-28 15:55:45', '2023-04-28 15:55:45', 3, 1, 3),
(12, '2023-04-28 15:55:48', '2023-04-28 15:55:48', 3, 1, 4),
(13, '2023-05-06 20:02:19', '2023-05-06 20:02:19', 2, 1, 6),
(14, '2023-05-06 20:10:49', '2023-05-06 20:10:49', 2, 1, 6),
(15, '2023-05-06 20:02:19', '2023-05-06 20:02:19', 3, 1, 7),
(16, '2023-05-06 20:16:41', '2023-05-06 20:16:41', 1, 1, 8),
(17, '2023-05-06 20:16:41', '2023-05-06 20:16:41', 2, 1, 8),
(18, '2023-05-06 20:19:45', '2023-05-06 20:19:45', 3, 1, 9),
(19, '2023-05-06 20:19:45', '2023-05-06 20:19:45', 1, 1, 9),
(20, '2023-05-06 20:19:45', '2023-05-06 20:19:45', 2, 1, 9),
(21, '2023-05-06 20:23:10', '2023-05-06 20:23:10', 1, 1, 10),
(22, '2023-05-06 20:23:10', '2023-05-06 20:23:10', 2, 1, 10),
(23, '2023-05-06 20:34:46', '2023-05-06 20:34:46', 1, 1, 11),
(24, '2023-05-06 20:34:46', '2023-05-06 20:34:46', 1, 1, 11),
(25, '2023-05-06 20:34:46', '2023-05-06 20:34:46', 2, 1, 11),
(26, '2023-05-06 20:38:29', '2023-05-06 20:38:29', 3, 1, 12),
(27, '2023-05-06 20:38:29', '2023-05-06 20:38:29', 3, 1, 12),
(28, '2023-05-06 20:39:14', '2023-05-06 20:39:14', 3, 1, 12),
(29, '2023-05-06 20:39:14', '2023-05-06 20:39:14', 2, 1, 12),
(30, '2023-05-06 20:42:44', '2023-05-06 20:42:44', 3, 1, 13),
(31, '2023-05-06 20:42:44', '2023-05-06 20:42:44', 1, 1, 13),
(32, '2023-05-06 20:51:38', '2023-05-06 20:51:38', 3, 1, 14),
(33, '2023-05-06 20:51:38', '2023-05-06 20:51:38', 2, 1, 14),
(34, '2023-05-06 20:55:57', '2023-05-06 20:55:57', 1, 1, 15),
(35, '2023-05-06 20:55:57', '2023-05-06 20:55:57', 2, 1, 15),
(36, '2023-05-06 20:59:23', '2023-05-06 20:59:23', 1, 1, 16),
(37, '2023-05-06 20:59:23', '2023-05-06 20:59:23', 3, 1, 16),
(38, '2023-05-06 21:02:23', '2023-05-06 21:02:23', 1, 1, 17),
(39, '2023-05-06 21:02:23', '2023-05-06 21:02:23', 2, 1, 17),
(40, '2023-05-06 21:05:12', '2023-05-06 21:05:12', 1, 1, 18),
(41, '2023-05-06 21:05:12', '2023-05-06 21:05:12', 2, 1, 18),
(42, '2023-05-06 21:05:12', '2023-05-06 21:05:12', 2, 1, 18),
(43, '2023-05-06 21:05:12', '2023-05-06 21:05:12', 3, 1, 18),
(44, '2023-05-06 21:11:01', '2023-05-06 21:11:01', 3, 1, 19),
(45, '2023-05-06 21:13:04', '2023-05-06 21:13:04', 2, 1, 20),
(46, '2023-05-06 21:13:05', '2023-05-06 21:13:05', 1, 1, 20),
(47, '2023-05-07 04:12:57', '2023-05-07 04:12:57', 1, 1, 21),
(48, '2023-05-07 04:12:57', '2023-05-07 04:12:57', 2, 1, 21),
(49, '2023-05-07 04:15:21', '2023-05-07 04:15:21', 4, 1, 22),
(50, '2023-05-07 04:15:21', '2023-05-07 04:15:21', 3, 1, 22),
(51, '2023-05-07 04:17:12', '2023-05-07 04:17:12', 3, 1, 23),
(52, '2023-05-07 04:17:12', '2023-05-07 04:17:12', 2, 1, 23),
(53, '2023-05-07 04:20:10', '2023-05-07 04:20:10', 4, 1, 24),
(54, '2023-05-07 04:20:10', '2023-05-07 04:20:10', 1, 1, 24),
(55, '2023-05-07 04:21:51', '2023-05-07 04:21:51', 3, 1, 25),
(56, '2023-05-07 04:21:51', '2023-05-07 04:21:51', 4, 1, 25),
(57, '2023-05-07 04:21:51', '2023-05-07 04:21:51', 2, 1, 25),
(58, '2023-05-07 04:25:10', '2023-05-07 04:25:10', 4, 1, 26),
(59, '2023-05-07 04:25:10', '2023-05-07 04:25:10', 2, 1, 26),
(60, '2023-05-07 04:25:10', '2023-05-07 04:25:10', 1, 1, 26),
(61, '2023-05-07 04:27:41', '2023-05-07 04:27:41', 4, 1, 27),
(62, '2023-05-07 04:27:41', '2023-05-07 04:27:41', 3, 1, 27),
(63, '2023-05-07 04:29:40', '2023-05-07 04:29:40', 4, 1, 28),
(64, '2023-05-07 04:29:40', '2023-05-07 04:29:40', 3, 1, 28),
(65, '2023-05-07 04:31:34', '2023-05-07 04:31:34', 4, 1, 29),
(66, '2023-05-07 04:31:34', '2023-05-07 04:31:34', 3, 1, 29),
(67, '2023-05-07 04:34:01', '2023-05-07 04:34:01', 4, 1, 30),
(68, '2023-05-07 04:34:01', '2023-05-07 04:34:01', 4, 1, 30),
(69, '2023-05-07 04:36:07', '2023-05-07 04:36:07', 3, 1, 31),
(70, '2023-05-07 04:36:07', '2023-05-07 04:36:07', 2, 1, 31),
(71, '2023-05-07 04:37:48', '2023-05-07 04:37:48', 4, 1, 32),
(72, '2023-05-07 04:37:48', '2023-05-07 04:37:48', 1, 1, 32),
(73, '2023-05-07 04:41:03', '2023-05-07 04:41:03', 1, 1, 33),
(74, '2023-05-07 04:41:03', '2023-05-07 04:41:03', 2, 1, 33),
(75, '2023-05-07 04:41:03', '2023-05-07 04:41:03', 3, 1, 33),
(76, '2023-05-07 04:43:18', '2023-05-07 04:43:18', 3, 1, 34),
(77, '2023-05-07 04:43:18', '2023-05-07 04:43:18', 3, 1, 34),
(78, '2023-05-07 04:43:18', '2023-05-07 04:43:18', 2, 1, 34),
(79, '2023-05-07 04:44:47', '2023-05-07 04:44:47', 1, 1, 35),
(80, '2023-05-07 04:44:47', '2023-05-07 04:44:47', 2, 1, 35),
(81, '2023-05-07 04:44:47', '2023-05-07 04:44:47', 4, 1, 35),
(82, '2023-05-07 04:47:12', '2023-05-07 04:47:12', 1, 1, 36),
(83, '2023-05-07 04:47:12', '2023-05-07 04:47:12', 2, 1, 36),
(84, '2023-05-07 04:47:12', '2023-05-07 04:47:12', 3, 1, 36),
(85, '2023-05-07 04:47:12', '2023-05-07 04:47:12', 4, 1, 36),
(86, '2023-05-07 04:49:41', '2023-05-07 04:49:41', 2, 1, 37),
(87, '2023-05-07 04:49:41', '2023-05-07 04:49:41', 4, 1, 37),
(88, '2023-05-07 04:51:25', '2023-05-07 04:51:25', 1, 1, 38),
(89, '2023-05-07 04:51:25', '2023-05-07 04:51:25', 2, 1, 38),
(90, '2023-05-07 04:51:25', '2023-05-07 04:51:25', 4, 1, 38),
(91, '2023-05-07 04:52:58', '2023-05-07 04:52:58', 2, 1, 39),
(92, '2023-05-07 04:52:58', '2023-05-07 04:52:58', 3, 1, 39),
(93, '2023-05-07 04:55:32', '2023-05-07 04:55:32', 3, 1, 40),
(94, '2023-05-07 04:55:32', '2023-05-07 04:55:32', 1, 1, 40),
(95, '2023-05-07 04:57:36', '2023-05-07 04:57:36', 3, 1, 41),
(96, '2023-05-07 04:57:36', '2023-05-07 04:57:36', 3, 1, 41),
(97, '2023-05-07 04:57:36', '2023-05-07 04:57:36', 2, 1, 41),
(98, '2023-05-07 04:58:56', '2023-05-07 04:58:56', 3, 1, 42),
(99, '2023-05-07 04:58:56', '2023-05-07 04:58:56', 2, 1, 42),
(100, '2023-05-07 05:01:26', '2023-05-07 05:01:26', 1, 1, 43),
(101, '2023-05-07 05:01:26', '2023-05-07 05:01:26', 3, 1, 43),
(102, '2023-05-07 05:01:26', '2023-05-07 05:01:26', 2, 1, 43),
(103, '2023-05-07 05:04:04', '2023-05-07 05:04:04', 3, 1, 44),
(104, '2023-05-07 05:04:04', '2023-05-07 05:04:04', 2, 1, 44),
(105, '2023-05-07 05:05:29', '2023-05-07 05:05:29', 4, 1, 45),
(106, '2023-05-07 05:05:29', '2023-05-07 05:05:29', 2, 1, 45),
(107, '2023-05-07 05:06:30', '2023-05-07 05:06:30', 4, 1, 46),
(108, '2023-05-07 05:06:30', '2023-05-07 05:06:30', 2, 1, 46),
(109, '2023-05-07 05:07:57', '2023-05-07 05:07:57', 2, 1, 47),
(110, '2023-05-07 05:07:57', '2023-05-07 05:07:57', 3, 1, 47),
(111, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 1, 1, 48),
(112, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 2, 1, 49),
(113, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 1, 1, 50),
(114, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 3, 1, 51),
(115, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 4, 1, 52),
(116, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 2, 1, 53),
(117, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 3, 1, 54),
(118, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 1, 1, 54),
(119, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 3, 1, 53),
(120, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 3, 1, 52),
(121, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 1, 1, 51),
(122, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 2, 1, 50),
(123, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 3, 1, 49),
(124, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 4, 1, 48),
(125, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 1, 1, 49),
(126, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 2, 1, 52),
(127, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 1, 1, 53),
(128, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 3, 1, 48),
(129, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 2, 1, 49),
(130, '2023-05-07 08:00:30', '2023-05-07 08:00:30', 3, 1, 52),
(131, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 1, 1, 62),
(132, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 2, 1, 63),
(133, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 3, 1, 64),
(134, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 4, 1, 65),
(135, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 2, 1, 65),
(136, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 1, 1, 66),
(137, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 4, 1, 67),
(138, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 1, 1, 68),
(139, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 3, 1, 62),
(140, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 2, 1, 63),
(141, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 3, 1, 62),
(142, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 1, 1, 64),
(143, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 3, 1, 65),
(144, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 1, 1, 66),
(145, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 2, 1, 67),
(146, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 4, 1, 68),
(147, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 1, 1, 63),
(148, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 2, 1, 68),
(149, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 1, 1, 64),
(150, '2023-05-07 08:16:41', '2023-05-07 08:16:41', 2, 1, 66);

-- --------------------------------------------------------

--
-- Table structure for table `book_lines`
--

CREATE TABLE `book_lines` (
  `bookline_id` int(11) NOT NULL,
  `bookline_name` varchar(255) NOT NULL,
  `document_url` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `publisher_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_lines`
--

INSERT INTO `book_lines` (`bookline_id`, `bookline_name`, `document_url`, `thumbnail`, `createdAt`, `updatedAt`, `publisher_id`, `category_id`) VALUES
(1, 'Xác suất thống kê', 'http://localhost:5000/api/open-pdf/xac-suat-thong-ke.pdf', 'http://localhost:5000/api/open-pdf/xac-suat-thong-ke.png', '2023-05-07 00:45:11', '2023-05-07 00:45:11', 1, 1),
(2, 'Giải tích 1', 'http://localhost:5000/api/open-pdf/giai-tich-1.pdf', 'http://localhost:5000/api/open-pdf/giai-tich-1.png', '2023-04-28 15:35:01', '2023-04-28 15:35:01', 1, 1),
(3, 'Giải tích 2', 'http://localhost:5000/api/open-pdf/giai-tich-2.pdf', 'http://localhost:5000/api/open-pdf/giai-tich-2.png', '2023-04-28 15:35:31', '2023-04-28 15:35:31', 3, 1),
(4, 'Nhập môn mạng máy tính', 'http://localhost:5000/api/open-pdf/nhap-mon-mang-may-tinh.pdf', 'http://localhost:5000/api/open-pdf/nhap-mon-mang-may-tinh.png', '2023-04-28 15:36:04', '2023-04-28 15:36:04', 1, 4),
(5, 'Sức bền vật liệu', 'http://localhost:5000/api/open-pdf/suc-ben-vat-lieu.pdf', 'http://localhost:5000/api/open-pdf/suc-ben-vat-lieu.png', '2023-04-28 15:37:09', '2023-04-28 15:37:09', 2, 3),
(6, 'Đại số tuyến tính', 'http://localhost:5000/api/open-pdf/dai-so-tuyen-tinh.pdf', 'http://localhost:5000/api/open-pdf/dai-so-tuyen-tinh.png', '2023-05-07 00:45:11', '2023-05-07 00:45:11', 1, 1),
(7, 'Logic học cương', 'http://localhost:5000/api/open-pdf/logic-hoc-cuong.pdf', 'http://localhost:5000/api/open-pdf/logic-hoc-cuong.png', '2023-05-07 00:59:32', '2023-05-07 00:59:32', 1, 1),
(8, 'Toán rời rạc', 'http://localhost:5000/api/open-pdf/toan-roi-rac.pdf', 'http://localhost:5000/api/open-pdf/toan-roi-rac.png', '2023-05-07 01:15:38', '2023-05-07 01:15:38', 1, 1),
(9, 'Toán cao cấp', 'http://localhost:5000/api/open-pdf/toan-cao-cap.pdf', 'http://localhost:5000/api/open-pdf/toan-cao-cap.png', '2023-05-07 01:19:00', '2023-05-07 01:19:00', 1, 1),
(10, 'Otomat và thuật toán', 'http://localhost:5000/api/open-pdf/otomat-va-thuat-toan.pdf', 'http://localhost:5000/api/open-pdf/otomat-va-thuat-toan.png', '2023-05-07 01:22:09', '2023-05-07 01:22:09', 1, 1),
(11, 'Quy hoạch tuyến tính', 'http://localhost:5000/api/open-pdf/quy-hoach-tuyen-tinh.pdf', 'http://localhost:5000/api/open-pdf/quy-hoach-tuyen-tinh.png', '2023-05-07 01:34:02', '2023-05-07 01:34:02', 4, 1),
(12, 'Phương pháp số thực hành', 'http://localhost:5000/api/open-pdf/phuong-phap-so-thuc-hanh.pdf', 'http://localhost:5000/api/open-pdf/phuong-phap-so-thuc-hanh.png', '2023-05-07 01:38:00', '2023-05-07 01:38:00', 1, 1),
(13, 'Phương pháp tính', 'http://localhost:5000/api/open-pdf/phuong-phap-tinh.pdf', 'http://localhost:5000/api/open-pdf/phuong-phap-tinh.png', '2023-05-07 01:42:09', '2023-05-07 01:42:09', 4, 1),
(14, 'Advanced Database Systems', 'http://localhost:5000/api/open-pdf/advanced-database-system.pdf', 'http://localhost:5000/api/open-pdf/advanced-database-system.png', '2023-05-07 01:49:47', '2023-05-07 01:49:47', 3, 4),
(15, 'Dữ Liệu Lớn', 'http://localhost:5000/api/open-pdf/du-lieu-lon.pdf', 'http://localhost:5000/api/open-pdf/du-lieu-lon.jpg', '2023-05-07 01:54:45', '2023-05-07 01:54:45', 2, 4),
(16, 'Ký giả chuyên nghiệp', 'http://localhost:5000/api/open-pdf/ky-gia-chuyen-nghiep.pdf', 'http://localhost:5000/api/open-pdf/ky-gia-chuyen-nghiep.jpg', '2023-05-07 01:58:28', '2023-05-07 01:58:28', 3, 4),
(17, 'Giải thuật và lập trình', 'http://localhost:5000/api/open-pdf/giai-thuat-va-lap-trinh.pdf', 'http://localhost:5000/api/open-pdf/giai-thuat-va-lap-trinh.jpg', '2023-05-07 02:01:54', '0000-00-00 00:00:00', 2, 4),
(18, 'Machine Learning cơ bản', 'http://localhost:5000/api/open-pdf/machine-learning-co-ban.pdf', 'http://localhost:5000/api/open-pdf/machine-learning-co-ban.jpg', '2023-05-07 02:04:35', '2023-05-07 02:04:35', 3, 4),
(19, 'Phương thức Amazon - 10 nguyên lý Internet vạn vật', 'http://localhost:5000/api/open-pdf/amazon-10-nguyen-ly-internet-van-vat.pdf', 'http://localhost:5000/api/open-pdf/amazon-10-nguyen-ly-internet-van-vat.jpg', '2023-05-07 02:10:20', '2023-05-07 02:10:20', 2, 4),
(20, 'Bóng Ma Trên Mạng', 'http://localhost:5000/api/open-pdf/bong-ma-tren-mang.pdf', 'http://localhost:5000/api/open-pdf/bong-ma-tren-mang.jpg', '2023-05-07 02:12:23', '2023-05-07 02:12:23', 3, 4),
(21, 'Khoa học và những giấc mơ', 'http://localhost:5000/api/open-pdf/khoa-hoc-va-nhung-giac-mo.pdf', 'http://localhost:5000/api/open-pdf/khoa-hoc-va-nhung-giac-mo.jpg', '2023-05-07 09:12:27', '2023-05-07 09:12:27', 2, 3),
(22, 'Tương lai nhân loại', 'http://localhost:5000/api/open-pdf/tuong-lai-nhan-loai.pdf', 'http://localhost:5000/api/open-pdf/tuong-lai-nhan-loai.jpg', '2023-05-07 09:14:14', '2023-05-07 09:14:14', 3, 3),
(23, 'Lý thuyết mạch', 'http://localhost:5000/api/open-pdf/ly-thuyet-mach.pdf', 'http://localhost:5000/api/open-pdf/ly-thuyet-mach.jpg', '2023-05-07 09:16:39', '2023-05-07 09:16:39', 3, 3),
(24, 'Học thuyết Darwin', 'http://localhost:5000/api/open-pdf/hoc-thuyet-darwin.pdf', 'http://localhost:5000/api/open-pdf/hoc-thuyet-darwin.jpg', '2023-05-07 09:19:06', '2023-05-07 09:19:06', 2, 3),
(25, 'Sự sống', 'http://localhost:5000/api/open-pdf/su-song.pdf', 'http://localhost:5000/api/open-pdf/su-song.jpg', '2023-05-07 09:21:27', '2023-05-07 09:21:27', 2, 3),
(26, 'Nhật ký người điên', 'http://localhost:5000/api/open-pdf/nhat-ky-nguoi-dien.pdf', 'http://localhost:5000/api/open-pdf/nhat-ky-nguoi-dien.jpg', '2023-05-07 09:24:16', '2023-05-07 09:24:16', 2, 2),
(27, 'Nhạn', 'http://localhost:5000/api/open-pdf/nhan.pdf', 'http://localhost:5000/api/open-pdf/nhan.jpg', '2023-05-07 09:26:53', '2023-05-07 09:26:53', 2, 2),
(28, 'Người Tị Nạn', 'http://localhost:5000/api/open-pdf/nguoi-ti-nan.pdf', 'http://localhost:5000/api/open-pdf/nguoi-ti-nan.jpg', '2023-05-07 09:29:03', '2023-05-07 09:29:03', 2, 2),
(29, 'Nhất phẩm thiên kim', 'http://localhost:5000/api/open-pdf/nhat-pham-thien-kim.pdf', 'http://localhost:5000/api/open-pdf/nhat-pham-thien-kim.jpg', '2023-05-07 09:30:53', '2023-05-07 09:30:53', 2, 2),
(30, 'Người ăn chay', 'http://localhost:5000/api/open-pdf/nguoi-an-chay.pdf', 'http://localhost:5000/api/open-pdf/nguoi-an-chay.jpg', '2023-05-07 09:32:26', '2023-05-07 09:32:26', 2, 2),
(31, 'Nắng trong vườn', 'http://localhost:5000/api/open-pdf/nang-trong-vuon.pdf', 'http://localhost:5000/api/open-pdf/nang-trong-vuon.jpg', '2023-05-07 09:35:37', '2023-05-07 09:35:37', 4, 2),
(32, 'Mưu sát tuổi xuân', 'http://localhost:5000/api/open-pdf/muu-sat-tuoi-xuan.pdf', 'http://localhost:5000/api/open-pdf/muu-sat-tuoi-xuan.jpg', '2023-05-07 09:37:22', '2023-05-07 09:37:22', 2, 2),
(33, 'Nền tảng đạo đức', 'http://localhost:5000/api/open-pdf/nen-tang-dao-duc.pdf', 'http://localhost:5000/api/open-pdf/nen-tang-dao-duc.jpg', '2023-05-07 09:40:41', '2023-05-07 09:40:41', 2, 5),
(34, 'Tôi giải mã tôi', 'http://localhost:5000/api/open-pdf/toi-giai-ma-toi.pdf', 'http://localhost:5000/api/open-pdf/toi-giai-ma-toi.jpg', '2023-05-07 09:42:42', '2023-05-07 09:42:42', 2, 5),
(35, '14 nguyên tắc thành công', 'http://localhost:5000/api/open-pdf/14-nguyen-tac-thanh-cong.pdf', 'http://localhost:5000/api/open-pdf/14-nguyen-tac-thanh-cong.jpg', '2023-05-07 09:44:18', '2023-05-07 09:44:18', 2, 5),
(36, 'Chiến thắng trò chơi cuộc sống', 'http://localhost:5000/api/open-pdf/chien-thang-tro-choi-cuoc-song.pdf', 'http://localhost:5000/api/open-pdf/chien-thang-tro-choi-cuoc-song.jpg', '2023-05-07 09:46:32', '2023-05-07 09:46:32', 3, 5),
(37, 'Chiến thắng nỗi lo và sự căng thẳng', 'http://localhost:5000/api/open-pdf/chien-thang-noi-lo-va-su-cang-thang.pdf', 'http://localhost:5000/api/open-pdf/chien-thang-noi-lo-va-su-cang-thang.jpg', '2023-05-07 09:49:07', '2023-05-07 09:49:07', 4, 5),
(38, 'Sức mạnh tư duy', 'http://localhost:5000/api/open-pdf/suc-manh-tu-duy.pdf', 'http://localhost:5000/api/open-pdf/suc-manh-tu-duy.jpg', '2023-05-07 09:50:55', '2023-05-07 09:50:55', 3, 5),
(39, 'Sống để hạnh phúc', 'http://localhost:5000/api/open-pdf/song-de-hanh-phuc.pdf', 'http://localhost:5000/api/open-pdf/song-de-hanh-phuc.jpg', '2023-05-07 09:52:29', '2023-05-07 09:52:29', 2, 5),
(40, 'Nạn dịch vaccine', 'http://localhost:5000/api/open-pdf/nan-dich-vaccine.pdf', 'http://localhost:5000/api/open-pdf/nan-dich-vaccine.jpg', '2023-05-07 09:55:05', '2023-05-07 09:55:05', 2, 6),
(41, 'Phương pháp tác động đầu và cột sống', 'http://localhost:5000/api/open-pdf/phuong-phap-tac-dong-dau-va-cot-song.pdf', 'http://localhost:5000/api/open-pdf/phuong-phap-tac-dong-dau-va-cot-song.jpg', '2023-05-07 09:56:38', '2023-05-07 09:56:38', 3, 6),
(42, 'Yoga dưỡng sinh', 'http://localhost:5000/api/open-pdf/yoga-duong-sinh.pdf', 'http://localhost:5000/api/open-pdf/yoga-duong-sinh.jpg', '2023-05-07 09:58:30', '2023-05-07 09:58:30', 2, 6),
(43, 'Trái cây chữa bệnh - Món ăn bài thuốc', 'http://localhost:5000/api/open-pdf/trai-cay-chua-benh-mon-an-bai-thuoc.pdf', 'http://localhost:5000/api/open-pdf/trai-cay-chua-benh-mon-an-bai-thuoc.jpg', '2023-05-07 10:00:25', '2023-05-07 10:00:25', 3, 6),
(44, '31 quả táo tinh thần', 'http://localhost:5000/api/open-pdf/31-qua-tao-tinh-than.pdf', 'http://localhost:5000/api/open-pdf/31-qua-tao-tinh-than.jpg', '2023-05-07 10:02:43', '2023-05-07 10:02:43', 2, 6),
(45, 'Ngủ ít vẫn khỏe', 'http://localhost:5000/api/open-pdf/ngu-it-van-khoe.pdf', 'http://localhost:5000/api/open-pdf/ngu-it-van-khoe.jpg', '2023-05-07 10:04:49', '2023-05-07 10:04:49', 4, 6),
(46, 'Uống trà trị bách bệnh', 'http://localhost:5000/api/open-pdf/uong-tra-tri-bach-benh.pdf', 'http://localhost:5000/api/open-pdf/uong-tra-tri-bach-benh.jpg', '2023-05-07 10:06:08', '2023-05-07 10:06:08', 3, 6),
(47, 'Để lành bệnh tự nhiên', 'http://localhost:5000/api/open-pdf/de-lanh-benh-tu-nhien.pdf', 'http://localhost:5000/api/open-pdf/de-lanh-benh-tu-nhien.jpg', '2023-05-07 10:07:25', '2023-05-07 10:07:25', 2, 6),
(48, 'Định vị - Cuộc chiến giành tâm lý khách hàng', 'dinh-vi.pdf', '', '2023-05-07 12:54:48', '2023-05-07 12:54:48', 2, 7),
(49, 'Đánh cắp ý tưởng', 'danh-cap-y-tuong.pdff', '', '2023-05-07 12:54:48', '2023-05-07 12:54:48', 3, 7),
(50, '1001 cách giữ chân khách hàng', '1001-cach-giu-chan-khach-hang.pdf', '', '2023-05-07 12:54:48', '2023-05-07 12:54:48', 4, 7),
(51, 'Khởi nghiệp tinh gọn', 'khoi-nghiep-tinh-gon.pdf', '', '2023-05-07 12:54:48', '2023-05-07 12:54:48', 2, 7),
(52, 'Bí quyết kinh doanh', 'bi-quyet-kinh-doanh.pdf', '', '2023-05-07 12:54:48', '2023-05-07 12:54:48', 3, 7),
(53, 'Thuật khởi nghiệp', 'thuat-khoi-nghiep.pdf', '', '2023-05-07 12:54:48', '2023-05-07 12:54:48', 2, 7),
(54, 'Tạm biệt cà rốt và cây gậy', 'tam-biet-ca-rot-va-cay-gay.pdf', '', '2023-05-07 12:54:48', '2023-05-07 12:54:48', 4, 7),
(62, 'Chủ nghĩa vô thần', 'chu-nghia-vo-than.pdf', '', '2023-05-07 13:12:03', '2023-05-07 13:12:03', 3, 8),
(63, 'Triết lý làm giàu của người Do Thái', 'triet-ly-lam-giau-cua-nguoi-do-thai.pdf', '', '2023-05-07 13:12:03', '2023-05-07 13:12:03', 3, 8),
(64, 'Hoa nam kinh', 'hoa-nam-kinh.pdf', '', '2023-05-07 13:12:03', '2023-05-07 13:12:03', 4, 8),
(65, 'Một giọt từ sự đọa đày', 'mot-giot-tu-su-doa-day.pdf', '', '2023-05-07 13:12:03', '2023-05-07 13:12:03', 3, 8),
(66, 'Luận về biếu tặng', 'luan-ve-bieu-tang.pdf', '', '2023-05-07 13:12:03', '2023-05-07 13:12:03', 2, 8),
(67, 'Kinh tế Việt Nam', 'kinh-te-viet-nam.pdf', '', '2023-05-07 13:12:03', '2023-05-07 13:12:03', 3, 8),
(68, 'Hành trình tri thức của Karl Marx', 'hanh-trinh-tri-thuc-cua-Karl-Marx.pdf', '', '2023-05-07 13:12:03', '2023-05-07 13:12:03', 2, 8);

-- --------------------------------------------------------

--
-- Table structure for table `borrowing_offlines`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `borrowing_offlines`
--

INSERT INTO `borrowing_offlines` (`borrowing_id`, `borrowing_date`, `return_date`, `due_date`, `createdAt`, `updatedAt`, `user_id`, `book_id`) VALUES
(1, '2023-04-28 16:09:23', NULL, '2023-08-06 16:09:23', '2023-04-28 16:09:23', '2023-04-28 16:09:23', 7, 5),
(2, '2023-04-28 16:09:45', NULL, '2023-08-06 16:09:45', '2023-04-28 16:09:45', '2023-04-28 16:09:45', 7, 6),
(3, '2023-04-28 16:09:51', NULL, '2023-08-06 16:09:51', '2023-04-28 16:09:51', '2023-04-28 16:09:51', 7, 7);

-- --------------------------------------------------------

--
-- Table structure for table `borrowing_onlines`
--

CREATE TABLE `borrowing_onlines` (
  `borrowing_id` int(11) NOT NULL,
  `borrowing_date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `bookline_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `borrowing_onlines`
--

INSERT INTO `borrowing_onlines` (`borrowing_id`, `borrowing_date`, `createdAt`, `updatedAt`, `user_id`, `bookline_id`) VALUES
(1, '2023-04-28 16:15:59', '2023-04-28 16:15:59', '2023-04-28 16:15:59', 7, 2),
(2, '2023-04-28 16:16:08', '2023-04-28 16:16:08', '2023-04-28 16:16:08', 7, 3),
(3, '2023-04-28 16:16:12', '2023-04-28 16:16:12', '2023-04-28 16:16:12', 7, 4),
(4, '2023-04-28 16:16:17', '2023-04-28 16:16:17', '2023-04-28 16:16:17', 7, 5);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Toán học', 'Toán học', '2023-04-28 14:58:41', '2023-04-28 14:58:41'),
(2, 'Văn học', 'Văn học', '2023-04-28 14:58:50', '2023-04-28 14:58:50'),
(3, 'Khoa học kĩ thuật', 'Khoa học kĩ thuật', '2023-04-28 14:59:14', '2023-04-28 14:59:14'),
(4, 'Công nghệ thông tin', 'Công nghệ thông tin', '2023-04-28 14:59:37', '2023-04-28 14:59:37'),
(5, 'Phát triển bản thân', 'Phát triển bản thân', '2023-05-07 04:39:40', '2023-05-07 04:39:40'),
(6, 'Y học và sức khỏe', 'Y học và sức khỏe', '2023-05-07 04:53:56', '2023-05-07 04:53:56'),
(7, 'Quản trị kinh doanh', 'Quản trị kinh doanh', '2023-05-07 07:49:57', '2023-05-07 07:49:57'),
(8, 'Triết học - Lý luận', 'triết học và lý luận', '2023-05-07 08:05:19', '2023-05-07 08:05:19');

-- --------------------------------------------------------

--
-- Table structure for table `publishers`
--

CREATE TABLE `publishers` (
  `publisher_id` int(11) NOT NULL,
  `publisher_name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `publishers`
--

INSERT INTO `publishers` (`publisher_id`, `publisher_name`, `address`, `phone`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'NXB ĐHQGHN', 'Xuân Thủy, Cầu giấy, Hà Nội', '0912345678', 'nxbdhqghn@gmail.com', '2023-04-28 15:03:05', '2023-04-28 15:03:05'),
(2, 'NXB Kim Đồng', 'Xuân Thủy, Cầu giấy, Hà Nội', '0912345677', 'nxbkimdong@gmail.com', '2023-04-28 15:03:30', '2023-04-28 15:03:30'),
(3, 'NXB Sông Thương', 'Xuân Thủy, Cầu giấy, Hà Nội', '0912345676', 'nxbsongthuong@gmail.com', '2023-04-28 15:03:54', '2023-04-28 15:03:54'),
(4, 'NXB Giáo Dục', 'Số 81 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội', '0943654798', 'nxbgd@nxbgd.vn', '2023-05-06 20:28:31', '2023-05-06 20:28:31');

-- --------------------------------------------------------

--
-- Table structure for table `repositories`
--

CREATE TABLE `repositories` (
  `repository_id` int(11) NOT NULL,
  `repository_name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `repositories`
--

INSERT INTO `repositories` (`repository_id`, `repository_name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Thư viện C1T', '144 Xuân Thủy, Cầu Giấy, Hà Nội', '2023-04-28 15:06:27', '2023-04-28 15:06:27'),
(2, 'Thư viện Mễ Trì', '182 Lương Thế Vinh, Thanh Xuân, Hà Nội', '2023-04-28 15:06:59', '2023-04-28 15:06:59'),
(3, 'Thư viện KHTN & XHNV', '334 Nguyễn Trãi, Thanh Xuân, Hà Nội', '2023-04-28 15:07:27', '2023-04-28 15:07:27'),
(4, 'Thư viện Ngoại Ngữ', '2 Phạm Văn Đồng, Cầu Giấy, Hà Nội', '2023-04-28 15:08:00', '2023-04-28 15:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`, `createdAt`, `updatedAt`) VALUES
(1, 'Người dùng', '2023-04-28 14:48:43', '2023-04-28 14:48:43'),
(2, 'Thủ thư', '2023-04-28 14:48:54', '2023-04-28 14:48:54'),
(3, 'Chuyên viên bổ sung tài liệu', '2023-04-28 14:49:06', '2023-04-28 14:49:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `phone`, `createdAt`, `updatedAt`, `role_id`) VALUES
(1, 'Vu Huy Anh', 'huyhuyanhanh@gmail.com', 'caigido', '0909090909', '2023-04-28 14:49:17', '2023-04-28 14:49:17', 3),
(6, 'Nguyen Quang Anh', 'quangquanganhanh@gmail.com', 'caigido', '0909090786', '2023-04-28 14:50:20', '2023-04-28 14:50:20', 2),
(7, 'Chu Minh Nam', 'minhminhnamnam@gmail.com', 'caigido', '0909090787', '2023-04-28 14:50:48', '2023-04-28 14:50:48', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `author_books`
--
ALTER TABLE `author_books`
  ADD PRIMARY KEY (`authorbook_id`),
  ADD KEY `bookline_id` (`bookline_id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `repository_id` (`repository_id`),
  ADD KEY `bookline_id` (`bookline_id`);

--
-- Indexes for table `book_lines`
--
ALTER TABLE `book_lines`
  ADD PRIMARY KEY (`bookline_id`),
  ADD KEY `publisher_id` (`publisher_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `borrowing_offlines`
--
ALTER TABLE `borrowing_offlines`
  ADD PRIMARY KEY (`borrowing_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `borrowing_onlines`
--
ALTER TABLE `borrowing_onlines`
  ADD PRIMARY KEY (`borrowing_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `bookline_id` (`bookline_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`publisher_id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `repositories`
--
ALTER TABLE `repositories`
  ADD PRIMARY KEY (`repository_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `author_books`
--
ALTER TABLE `author_books`
  MODIFY `authorbook_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `book_lines`
--
ALTER TABLE `book_lines`
  MODIFY `bookline_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `borrowing_offlines`
--
ALTER TABLE `borrowing_offlines`
  MODIFY `borrowing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `borrowing_onlines`
--
ALTER TABLE `borrowing_onlines`
  MODIFY `borrowing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `publishers`
--
ALTER TABLE `publishers`
  MODIFY `publisher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `repositories`
--
ALTER TABLE `repositories`
  MODIFY `repository_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `author_books`
--
ALTER TABLE `author_books`
  ADD CONSTRAINT `author_books_ibfk_1` FOREIGN KEY (`bookline_id`) REFERENCES `book_lines` (`bookline_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `author_books_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`repository_id`) REFERENCES `repositories` (`repository_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_2` FOREIGN KEY (`bookline_id`) REFERENCES `book_lines` (`bookline_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `book_lines`
--
ALTER TABLE `book_lines`
  ADD CONSTRAINT `book_lines_ibfk_1` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`publisher_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `book_lines_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `borrowing_offlines`
--
ALTER TABLE `borrowing_offlines`
  ADD CONSTRAINT `borrowing_offlines_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `borrowing_offlines_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `borrowing_onlines`
--
ALTER TABLE `borrowing_onlines`
  ADD CONSTRAINT `borrowing_onlines_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `borrowing_onlines_ibfk_2` FOREIGN KEY (`bookline_id`) REFERENCES `book_lines` (`bookline_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
