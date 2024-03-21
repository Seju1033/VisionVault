-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2024 at 04:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `practice`
--

-- --------------------------------------------------------

--
-- Table structure for table `accountconfirm`
--

CREATE TABLE `accountconfirm` (
  `user_id` int(11) NOT NULL,
  `code` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `demo`
--

CREATE TABLE `demo` (
  `1` int(11) NOT NULL,
  `2` int(11) NOT NULL,
  `4` int(11) NOT NULL,
  `3` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `registration_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `registration_date`) VALUES
(1, 'Sahejan', '$2y$10$Kljkdi.uBLJMicfute0a0eCWdWb7KiEHQezcZdu2y1KL41F7.GLCy', 'sahejanpalla@gmail.com', '2024-03-15 09:01:36'),
(2, 'Sahejan', '$2y$10$OroSXxd/LvR0n/4E4KUIHO2Zmr.qSHApClyUzJDwVO/WoT2xcb6iO', 'sahejanpalla@gmail.com', '2024-03-15 09:05:59'),
(3, 'Murtaza', '$2y$10$cQ92ESnTBvIR76DEn5oUdel.xCiUBr6YI8YfbFAv.KTUXdN7AhN7O', 'murtazadodhiya@gmail.com', '2024-03-15 12:40:51'),
(4, 'hellow', '$2y$10$vcj54pjdBUTa4p1mpCnqXe305qvj5tpl109.7GnzSHEanO.DVbItq', 'hellow@gmail.com', '2024-03-19 17:30:30'),
(5, 'djbfksdb', '$2y$10$kw96VluHDZql2CEpqkqdGuk8YrKXZzcHNTRz6HtC2/a7St1EPBf3q', 'nazirsarvadi2@gmail.com', '2024-03-20 16:10:36'),
(6, 'seju', '$2y$10$o2XRL4ubMDPLvHxSc3Ze6uexDg/oSVwWbj7Zh363hcBYh5m/1WvM2', 'lal@gmail.com', '2024-03-21 02:29:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountconfirm`
--
ALTER TABLE `accountconfirm`
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
