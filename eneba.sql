-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2026 at 12:06 AM
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
-- Database: `eneba`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `game_name` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `platform` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `region` varchar(255) NOT NULL,
  `likes` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `is_cashback` tinyint(1) NOT NULL,
  `cashback_price` double NOT NULL,
  `hover_note` text NOT NULL,
  `game_name_search` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `game_name`, `image_url`, `platform`, `price`, `region`, `likes`, `discount`, `is_cashback`, `cashback_price`, `hover_note`, `game_name_search`) VALUES
(1, 'EA SPORTS™ FIFA 23 Ultimate Edition (PC) Steam Key GLOBAL', 'https://imgproxy.eneba.games/-oP3f0qgUYk66Am_l1ouMKjlxSfm5iQGpYT_MWmTUZw/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9x/V0I1Y2ktTlRHOU1s/WndWVFlSX2wwMHpj/M3ktQzRxYnVhSjht/QTdFc0dzLmpwZw', 'Steam', 100, 'GLOBAL', 33, 14, 1, 1.16, 'This hover thing is here only because it exists in the main ENEBA shop.', 'EA SPORTS™ FIFA 23'),
(2, 'Red Dead Redemption 2 Rockstar Games Launcher Key GLOBAL', 'https://imgproxy.eneba.games/iuhaURlEpTDYsM1X6uEI6o9dZahoID4JnAx1kyj-v9U/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/OEZLcDZuM2xvRUot/RXY0aHM1RXRDREJ0/QTR5VkZKVEdFdHRp/bTBob3cwLmpwZWc', 'Rockstar Games Launcher', 59.99, 'GLOBAL', 25968, 79, 0, 0, 'Never played this game, ik about the horse physics tho.', 'Red Dead Redemption 2'),
(3, 'Split Fiction (Xbox Series X|S) XBOX LIVE Key EUROPE', 'https://imgproxy.eneba.games/gzjBe4m8P8-w1I37Drd8icqKBCzbOK9vmaBtwzBPFxA/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/cHNhQjAwRmRUOHJK/dW9uVGhGXzN5dksz/cjBuUWhDY0IwX2lB/VDh4Q25NLmpwZw', 'Xbox Live', 49.99, 'EUROPE', 600, 11, 0, 0, 'Fuse JS is used for fuzzy search with threshold of 0.5', 'Split Fiction'),
(4, 'Dark Souls 3 Steam Key GLOBAL', 'https://imgproxy.eneba.games/OtrcBYlG1Fyn_2tf6eCyehTAmcE7iexMM3XxCKKJGNk/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9C/amRFWTZ1LmpwZw', 'Steam', 59, 'GLOBAL', 13401, 64, 1, 2, 'I have all achievements and 333h+ playtime lmao.', 'Dark Souls 3'),
(5, 'Valorant Points 100 VP Key - GLOBAL', 'https://wallpapers.com/images/high/chamber-valorant-2160-x-3840-wallpaper-ejiaz0jyg4pfei0k.webp', 'Riot Games', 3.99, 'EUROPE', 67, 0, 1, 1.8, 'Ik ENEBA has a VALORANT logo, but it has Jett and I like Chamber more.', 'Valorant');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
