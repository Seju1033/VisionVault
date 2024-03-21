-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2024 at 04:04 PM
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
-- Database: `glasses`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(100) NOT NULL,
  `admin_password` text NOT NULL,
  `admin_name` text NOT NULL,
  `admn_email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_password`, `admin_name`, `admn_email`) VALUES
(1033, 'admin1033', 'admin', 'visionvaulthelp@gmail.com'),
(1033, 'admin1033', 'admin', 'visionvaulthelp@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `name`) VALUES
(1, 'ZEFR '),
(2, 'FASTRACK '),
(3, 'VOGUE EYEWEAR'),
(4, 'RAY BAN'),
(5, 'MAUI JIM '),
(6, 'TED-BAKER '),
(7, 'ZEAL OPTICS');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`) VALUES
(1, 'MALE'),
(2, 'FEMALE'),
(3, 'KIDS');

-- --------------------------------------------------------

--
-- Table structure for table `email_verification`
--

CREATE TABLE `email_verification` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `verification_code` varchar(255) NOT NULL,
  `is_verified` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `frames`
--

CREATE TABLE `frames` (
  `product_id` int(255) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_brand` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `frame_material` varchar(100) NOT NULL,
  `rim` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `frame_shape` varchar(100) NOT NULL,
  `price` int(255) NOT NULL,
  `img` text NOT NULL,
  `frame_color` varchar(100) NOT NULL,
  `availability` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `frames`
--

INSERT INTO `frames` (`product_id`, `product_name`, `product_brand`, `gender`, `frame_material`, `rim`, `size`, `frame_shape`, `price`, `img`, `frame_color`, `availability`) VALUES
(1, 'Blue Rectangle Unisex Eyeglasses (FT1275UFP4MBUV|52)', 'FASTRACK', 'male', 'Plastic', 'Rimmed', 'Medium', 'Rectangle', 750, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1275UFP4MBUV_1_lar.jpg', 'Blue', 'In Stock'),
(2, '\r\nGrey Rectangle Unisex Eyeglasses (FT1276UFP3MGYV|50)', 'FASTRACK', 'male', 'Plastic', 'Rimmed', 'Medium', 'Rectangle', 750, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1276UFP3MGYV_1_lar.jpg', 'Grey', 'In Stock'),
(3, 'Blue Wayfarer Rimmed Eyeglasses for Men', 'FASTRACK', '750', 'Plastic', 'Rimmed', 'Medium', 'Wayfarer', 750, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1504MFP3MBLV_1_lar.jpg', 'Blue', 'in Stock'),
(4, 'Orange Round Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'Unisex', 'Plastic', 'Rimmed', 'Medium', 'Round', 750, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1507UFP2MORV_1_lar.jpg', 'orange', 'in Stock'),
(5, 'Blue Round Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Plastic', 'Rimmed', 'Medium', 'Round', 750, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1507UFP7MBLV_7_lar.jpg', 'Blue', 'In Stock'),
(6, 'Green Geometric Rimmed Eyeglasses for Men and Women', 'FASTACK', 'unisex', 'Plastic', 'Rimmed', 'Medium', 'Geometric', 750, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1508UFP4MGRV_1_lar.jpg', 'Green', 'In Stock'),
(7, 'Red Geometric Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Plastic', 'Rimmed', 'Medium', 'Geometric', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1519UFA10LRDV_1_lar.jpg', 'Red', 'In Stock'),
(8, 'Green Rectangle Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Plastic', 'Rimmed', 'Medium', 'Rectangle', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1518UFA9MGRV_1_lar.jpg', 'Green', 'In Stock'),
(9, '\r\nPeach Wayfarer Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Wayfarer', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1516UFA7MORV_1_lar.jpg', 'Peach', 'In Stock'),
(10, 'Grey Rectangle Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Rectangle', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1515UFA6LGRV_7_lar.jpg', 'Red', 'In Stock'),
(11, '\r\nBlue Geometric Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Acetate', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1514UFA5LBLV_7_lar.jpg', 'Blue', 'In Stock'),
(12, 'Brown Wayfarer Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Acetate', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1513UFA4LBRV_1_lar.jpg', 'Brown', 'In Stock'),
(13, 'Brown Wayfarer Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Acetate', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1513UFA4LBRV_1_lar.jpg', 'Brown', 'In Stock'),
(14, '\r\nBlue Geometric Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Acetate', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1514UFA5LBLV_7_lar.jpg', 'Blue', 'In Stock'),
(15, 'Green Geometric Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Geometric', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1512UFA3MGRV_7_lar.jpg', 'green', 'In Stock'),
(16, 'Blue Rectangle Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Rectangle', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1511UFA2MBLV_7_lar.jpg', 'Blue', 'In Stock'),
(17, '\r\nBlue Geometric Rimmed Eyeglasses for Men and Women', 'FASTRACK', 'unisex', 'Acetate', 'Rimmed', 'Medium', 'Acetate', 1000, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/F/T/FT1514UFA5LBLV_7_lar.jpg', 'Blue', 'In Stock'),
(18, 'Grey Rimless Round Eyeglasses For Men', 'VOGUE EYEWEAR\r\n', 'Men', 'Gunmetal', 'Rimless', 'Medium', 'Round', 4390, 'https://tep-media.s3.ap-south-1.amazonaws.com/media/catalog/product/f/v/fvo4262i54853_1_lar.jpg', 'Grey', 'In Stock');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `image_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `total_amount` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `payment_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `review_date` timestamp NOT NULL DEFAULT current_timestamp()
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
(1, 'admin', 'admin2024S', 'sahejanpalla@gmail.com', '2024-02-01 12:43:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `email_verification`
--
ALTER TABLE `email_verification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `frames`
--
ALTER TABLE `frames`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `email_verification`
--
ALTER TABLE `email_verification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `frames`
--
ALTER TABLE `frames`
  MODIFY `product_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
