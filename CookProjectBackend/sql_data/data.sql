-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: cookommunity
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (1,'Can add user',1,'add_systemuser'),(2,'Can change user',1,'change_systemuser'),(3,'Can delete user',1,'delete_systemuser'),(4,'Can view user',1,'view_systemuser'),(5,'Can add chief',2,'add_chief'),(6,'Can change chief',2,'change_chief'),(7,'Can delete chief',2,'delete_chief'),(8,'Can view chief',2,'view_chief'),(9,'Can add foodstuff',3,'add_foodstuff'),(10,'Can change foodstuff',3,'change_foodstuff'),(11,'Can delete foodstuff',3,'delete_foodstuff'),(12,'Can view foodstuff',3,'view_foodstuff'),(13,'Can add forum',4,'add_forum'),(14,'Can change forum',4,'change_forum'),(15,'Can delete forum',4,'delete_forum'),(16,'Can view forum',4,'view_forum'),(17,'Can add ingredient',5,'add_ingredient'),(18,'Can change ingredient',5,'change_ingredient'),(19,'Can delete ingredient',5,'delete_ingredient'),(20,'Can view ingredient',5,'view_ingredient'),(21,'Can add ticket',6,'add_ticket'),(22,'Can change ticket',6,'change_ticket'),(23,'Can delete ticket',6,'delete_ticket'),(24,'Can view ticket',6,'view_ticket'),(25,'Can add recipe',7,'add_recipe'),(26,'Can change recipe',7,'change_recipe'),(27,'Can delete recipe',7,'delete_recipe'),(28,'Can view recipe',7,'view_recipe'),(29,'Can add forum message',8,'add_forummessage'),(30,'Can change forum message',8,'change_forummessage'),(31,'Can delete forum message',8,'delete_forummessage'),(32,'Can view forum message',8,'view_forummessage'),(33,'Can add comment',9,'add_comment'),(34,'Can change comment',9,'change_comment'),(35,'Can delete comment',9,'delete_comment'),(36,'Can view comment',9,'view_comment'),(37,'Can add relationship',10,'add_relationship'),(38,'Can change relationship',10,'change_relationship'),(39,'Can delete relationship',10,'delete_relationship'),(40,'Can view relationship',10,'view_relationship'),(41,'Can add log entry',11,'add_logentry'),(42,'Can change log entry',11,'change_logentry'),(43,'Can delete log entry',11,'delete_logentry'),(44,'Can view log entry',11,'view_logentry'),(45,'Can add permission',12,'add_permission'),(46,'Can change permission',12,'change_permission'),(47,'Can delete permission',12,'delete_permission'),(48,'Can view permission',12,'view_permission'),(49,'Can add group',13,'add_group'),(50,'Can change group',13,'change_group'),(51,'Can delete group',13,'delete_group'),(52,'Can view group',13,'view_group'),(53,'Can add content type',14,'add_contenttype'),(54,'Can change content type',14,'change_contenttype'),(55,'Can delete content type',14,'delete_contenttype'),(56,'Can view content type',14,'view_contenttype'),(57,'Can add session',15,'add_session'),(58,'Can change session',15,'change_session'),(59,'Can delete session',15,'delete_session'),(60,'Can view session',15,'view_session');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_chief`
--

DROP TABLE IF EXISTS `cook_chief`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_chief` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `bio` varchar(500) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `cook_chief_user_id_5a51d20f_fk_cook_systemuser_id` FOREIGN KEY (`user_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_chief`
--

LOCK TABLES `cook_chief` WRITE;
/*!40000 ALTER TABLE `cook_chief` DISABLE KEYS */;
INSERT INTO `cook_chief` (`id`, `bio`, `user_id`) VALUES (1,NULL,1),(2,'Master chief',3);
/*!40000 ALTER TABLE `cook_chief` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_comment`
--

DROP TABLE IF EXISTS `cook_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `text` longtext NOT NULL,
  `date_posted` datetime(6) NOT NULL,
  `recipe_id` int NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `cook_comment_recipe_id_14c20dbf_fk_cook_recipe_recipe_id` (`recipe_id`),
  KEY `cook_comment_user_id_963acbb1_fk_cook_systemuser_id` (`user_id`),
  CONSTRAINT `cook_comment_recipe_id_14c20dbf_fk_cook_recipe_recipe_id` FOREIGN KEY (`recipe_id`) REFERENCES `cook_recipe` (`recipe_id`),
  CONSTRAINT `cook_comment_user_id_963acbb1_fk_cook_systemuser_id` FOREIGN KEY (`user_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_comment`
--

LOCK TABLES `cook_comment` WRITE;
/*!40000 ALTER TABLE `cook_comment` DISABLE KEYS */;
INSERT INTO `cook_comment` (`comment_id`, `text`, `date_posted`, `recipe_id`, `user_id`) VALUES (4,'این غذا عالی است.','2023-01-28 13:59:12.274331',1,2),(5,'برای رفیق فابم درست کردم و خیلی مشتی بود.','2023-01-28 13:59:40.099492',1,4);
/*!40000 ALTER TABLE `cook_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_foodstuff`
--

DROP TABLE IF EXISTS `cook_foodstuff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_foodstuff` (
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_foodstuff`
--

LOCK TABLES `cook_foodstuff` WRITE;
/*!40000 ALTER TABLE `cook_foodstuff` DISABLE KEYS */;
INSERT INTO `cook_foodstuff` (`name`, `price`) VALUES ('آب',4),('آرد گندم',15),('آووکادو',88),('برنج سفید',30),('بیکن',60),('پاستا',35),('پنیر پیتزا',29),('پنیر چدار',15),('پنیر فتا',45),('پنیر موزارلا',16),('پنیر ورقه‌ای',5),('پودر سیر',12),('پیاز',8),('پیازچه',11),('تخم مرغ',2),('جعفری',10),('خامه',18),('خیارشور',22),('ذرت شیرین',18),('روغن',40),('روغن زیتون',32),('ریحان',10),('ژامبون',24),('سس پستو',23),('سس خردل',25),('سس ماست',16),('سس مایونز',40),('سیب زمینی',17),('سیر',12),('سینه مرغ بدون استخوان',55),('شنبلیله',9),('شوید',11),('شوید تازه',10),('فیله مرغ',63),('قارچ',14),('کاهو',12),('کره',12),('کنسرو تن ماهی',44),('گوجه فرنگی',9),('گوجه گیلاسی',13),('ماکارونی',27),('مغز نان باگت',15),('موسیر',10),('نان باگت کوچک',10),('نان تست',19),('نخود فرنگی',9),('نمک و فلفل سیاه',5),('هویج',8);
/*!40000 ALTER TABLE `cook_foodstuff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_forum`
--

DROP TABLE IF EXISTS `cook_forum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_forum` (
  `forum_id` int NOT NULL AUTO_INCREMENT,
  `members_count` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `owner_id` bigint NOT NULL,
  PRIMARY KEY (`forum_id`),
  UNIQUE KEY `cook_forum_owner_id_name_a408266a_uniq` (`owner_id`,`name`),
  CONSTRAINT `cook_forum_owner_id_15ff6f33_fk_cook_chief_id` FOREIGN KEY (`owner_id`) REFERENCES `cook_chief` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_forum`
--

LOCK TABLES `cook_forum` WRITE;
/*!40000 ALTER TABLE `cook_forum` DISABLE KEYS */;
INSERT INTO `cook_forum` (`forum_id`, `members_count`, `name`, `owner_id`) VALUES (1,2,'AJ Forum',1);
/*!40000 ALTER TABLE `cook_forum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_forum_banned`
--

DROP TABLE IF EXISTS `cook_forum_banned`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_forum_banned` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `forum_id` int NOT NULL,
  `systemuser_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_forum_banned_forum_id_systemuser_id_b8ff5228_uniq` (`forum_id`,`systemuser_id`),
  KEY `cook_forum_banned_systemuser_id_a5b0bd17_fk_cook_systemuser_id` (`systemuser_id`),
  CONSTRAINT `cook_forum_banned_forum_id_d7bebaf1_fk_cook_forum_forum_id` FOREIGN KEY (`forum_id`) REFERENCES `cook_forum` (`forum_id`),
  CONSTRAINT `cook_forum_banned_systemuser_id_a5b0bd17_fk_cook_systemuser_id` FOREIGN KEY (`systemuser_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_forum_banned`
--

LOCK TABLES `cook_forum_banned` WRITE;
/*!40000 ALTER TABLE `cook_forum_banned` DISABLE KEYS */;
INSERT INTO `cook_forum_banned` (`id`, `forum_id`, `systemuser_id`) VALUES (1,1,4);
/*!40000 ALTER TABLE `cook_forum_banned` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_forum_members`
--

DROP TABLE IF EXISTS `cook_forum_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_forum_members` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `forum_id` int NOT NULL,
  `systemuser_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_forum_members_forum_id_systemuser_id_5a80b610_uniq` (`forum_id`,`systemuser_id`),
  KEY `cook_forum_members_systemuser_id_7f70156c_fk_cook_systemuser_id` (`systemuser_id`),
  CONSTRAINT `cook_forum_members_forum_id_1d0d1cfc_fk_cook_forum_forum_id` FOREIGN KEY (`forum_id`) REFERENCES `cook_forum` (`forum_id`),
  CONSTRAINT `cook_forum_members_systemuser_id_7f70156c_fk_cook_systemuser_id` FOREIGN KEY (`systemuser_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_forum_members`
--

LOCK TABLES `cook_forum_members` WRITE;
/*!40000 ALTER TABLE `cook_forum_members` DISABLE KEYS */;
INSERT INTO `cook_forum_members` (`id`, `forum_id`, `systemuser_id`) VALUES (4,1,2),(2,1,3);
/*!40000 ALTER TABLE `cook_forum_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_forummessage`
--

DROP TABLE IF EXISTS `cook_forummessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_forummessage` (
  `message_id` int NOT NULL AUTO_INCREMENT,
  `text` longtext NOT NULL,
  `date_posted` datetime(6) NOT NULL,
  `forum_id` int NOT NULL,
  `sender_id` bigint NOT NULL,
  PRIMARY KEY (`message_id`),
  KEY `cook_forummessage_forum_id_bfb4dc85_fk_cook_forum_forum_id` (`forum_id`),
  KEY `cook_forummessage_sender_id_84f67392_fk_cook_systemuser_id` (`sender_id`),
  CONSTRAINT `cook_forummessage_forum_id_bfb4dc85_fk_cook_forum_forum_id` FOREIGN KEY (`forum_id`) REFERENCES `cook_forum` (`forum_id`),
  CONSTRAINT `cook_forummessage_sender_id_84f67392_fk_cook_systemuser_id` FOREIGN KEY (`sender_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_forummessage`
--

LOCK TABLES `cook_forummessage` WRITE;
/*!40000 ALTER TABLE `cook_forummessage` DISABLE KEYS */;
INSERT INTO `cook_forummessage` (`message_id`, `text`, `date_posted`, `forum_id`, `sender_id`) VALUES (1,'Message 1 from Yashar.','2023-01-25 08:53:15.764868',1,2),(2,'Message 2 from Ali.','2023-01-25 08:53:23.711509',1,1);
/*!40000 ALTER TABLE `cook_forummessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_ingredient`
--

DROP TABLE IF EXISTS `cook_ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_ingredient` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `unit` int NOT NULL,
  `foodstuff_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_ingredient_foodstuff_id_amount_unit_07400f93_uniq` (`foodstuff_id`,`amount`,`unit`),
  CONSTRAINT `cook_ingredient_foodstuff_id_f9be414a_fk_cook_foodstuff_name` FOREIGN KEY (`foodstuff_id`) REFERENCES `cook_foodstuff` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_ingredient`
--

LOCK TABLES `cook_ingredient` WRITE;
/*!40000 ALTER TABLE `cook_ingredient` DISABLE KEYS */;
INSERT INTO `cook_ingredient` (`id`, `amount`, `unit`, `foodstuff_id`) VALUES (64,1,3,'آب'),(65,1,4,'آرد گندم'),(24,3,4,'آرد گندم'),(50,1,6,'آووکادو'),(28,4,4,'برنج سفید'),(49,200,1,'بیکن'),(39,280,1,'پاستا'),(46,170,1,'پنیر پیتزا'),(47,0,3,'پنیر چدار'),(53,1,5,'پنیر چدار'),(34,100,1,'پنیر فتا'),(69,1,3,'پنیر موزارلا'),(19,5,4,'پنیر موزارلا'),(4,2,5,'پنیر ورقه‌ای'),(1,1,4,'پودر سیر'),(62,0,6,'پیاز'),(16,1,5,'پیاز'),(56,1,6,'پیاز'),(6,70,1,'پیاز'),(33,1,5,'پیازچه'),(11,3,6,'پیازچه'),(25,1,4,'تخم مرغ'),(15,1,6,'تخم مرغ'),(31,2,6,'تخم مرغ'),(59,3,6,'تخم مرغ'),(57,5,6,'تخم مرغ'),(22,2,4,'جعفری'),(48,2,4,'خامه'),(42,5,6,'خیارشور'),(10,1,3,'ذرت شیرین'),(70,2,4,'روغن'),(38,2,4,'روغن زیتون'),(40,1,5,'ریحان'),(18,3,5,'ژامبون'),(68,3,4,'سس پستو'),(44,2,4,'سس خردل'),(13,1,3,'سس ماست'),(43,2,4,'سس مایونز'),(8,4,4,'سس مایونز'),(61,1,6,'سیب زمینی'),(21,4,6,'سیب زمینی'),(58,5,6,'سیب زمینی'),(9,400,1,'سیب زمینی'),(35,2,6,'سیر'),(3,200,1,'سینه مرغ بدون استخوان'),(32,300,1,'سینه مرغ بدون استخوان'),(63,1,4,'شنبلیله'),(60,1,4,'شوید'),(12,3,4,'شوید تازه'),(66,4,6,'فیله مرغ'),(5,50,1,'قارچ'),(23,150,1,'قارچ'),(55,500,1,'قارچ'),(52,4,5,'کاهو'),(27,1,6,'کره'),(7,2,4,'کره'),(41,1,5,'کنسرو تن ماهی'),(67,3,6,'گوجه فرنگی'),(51,25,1,'گوجه فرنگی'),(17,2,6,'گوجه گیلاسی'),(37,5,6,'گوجه گیلاسی'),(45,1,3,'ماکارونی'),(26,1,5,'مغز نان باگت'),(36,0,6,'موسیر'),(2,1,6,'نان باگت کوچک'),(54,4,5,'نان تست'),(29,20,1,'نخود فرنگی'),(20,1,4,'نمک و فلفل سیاه'),(14,10,1,'نمک و فلفل سیاه'),(30,3,5,'هویج');
/*!40000 ALTER TABLE `cook_ingredient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_recipe`
--

DROP TABLE IF EXISTS `cook_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_recipe` (
  `recipe_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` int NOT NULL,
  `description` longtext NOT NULL,
  `price` int NOT NULL,
  `difficulty` int NOT NULL,
  `preparation_time` int NOT NULL,
  `meal_tags` longtext NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `date_created` datetime(6) NOT NULL,
  `score` double NOT NULL,
  `rate` int NOT NULL,
  `chief_id` bigint NOT NULL,
  PRIMARY KEY (`recipe_id`),
  UNIQUE KEY `name` (`name`),
  KEY `cook_recipe_chief_id_44746611_fk_cook_chief_id` (`chief_id`),
  CONSTRAINT `cook_recipe_chief_id_44746611_fk_cook_chief_id` FOREIGN KEY (`chief_id`) REFERENCES `cook_chief` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_recipe`
--

LOCK TABLES `cook_recipe` WRITE;
/*!40000 ALTER TABLE `cook_recipe` DISABLE KEYS */;
INSERT INTO `cook_recipe` (`recipe_id`, `name`, `category`, `description`, `price`, `difficulty`, `preparation_time`, `meal_tags`, `photo`, `date_created`, `score`, `rate`, `chief_id`) VALUES (1,'ساندویچ فیله‌ی مرغ',6,'ابتدا کره را داخل ماهیتابه ریخته و بعد پودر سیر را روی آن ریخته و با قاشق با هم مخلوط کنید و اجازه داده تا کره ذوب شود. سپس نان باگت را از وسط قاچ زده و کره را داخل نان بمالید. پیاز را خرد کرده و کنار گذاشته. سپس فیله مرغ را داخل مخلوط کن ریخته و له کنید. نان را از طرفی که به کره آغشته شده داخل ماهیتابه قرار داده تا برشته شود. حالا داخل ماهیتابه کمی روغن ریخته و مرغ له ‌شده را داخل آن بریزید و فلفل سیاه، فلفل قرمز، نمک، آویشن، پیاز و قارچ را به آن اضافه کرده و با هم تفت دهید. در آخر پنیر را روی مواد گذاشته تا آب شود. مواد را داخل نان ریخته. می‌توانید کمی سس مایونز هم روی ساندویچ خود بریزید',10000,1,2,'اصلی','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:08:39.948776',4.5,2,2),(39,'سالاد سیب زمینی و پیازچه',3,'ابتدا سیب زمینی را اب پز کنید و بعد از پخته شدن پوست آن را بگیرید و بصورت نگینی خورد کنید. پیازچه تمیز شده و شسته شده را خورد کنید . بعد شوید تازه خورد شده را اضافه کنید. در کنار آن کنسرو ذرت شیرین را بیفزایید. نمک و فلفل و سس ( سه قاشق مایونز و یک قاشق ماست را مخلوط) و به مواد اضافه کنید',6947,1,1,'پیش_غذا','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.644658',0,0,1),(40,'تخم مرغ و پنیر موزارلا',3,'در داخل ماهی‌تابه کمی روغن بریزید و قالب دایره‌ای شکل را داخل آن قرار دهید. تخم‌مرغ را داخل قالب دایره‌ای در ماهیتابه شکسته و پیاز خردشده و گوجه خردشده را روی آن بریزید. سپس ژامپون خردشده را روی آن بریزید و روی آن کمی پنیر موزارلا بریزید و آن را از قالب بیرون بیاورید. در آخر آن را داخل فر به مدت ۱۰ دقیقه در دمای ۱۵۰ درجه‌ی سانتی گراد گذاشته تا پنیر آب شود و روی آن برشته شود',193,1,1,'شام','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.677345',0,0,1),(41,'استریپس سیب زمینی',3,'سیب زمینی پخته شده را میکس کنید تا کاملا له شوند. سپس پیاز و جعفری خرد شده را اضافه کنید. قارچ را کمی تفت دهید بطوریکه آب نیاندازد. بعد از کمی تفت به مواد اضافه کنید. نمک و فلفل سیاه را بیافزایید و خوب ورز دهید. از مواد آماده شده به اندازه یک گلوله بردارید و بصورت مستطیل مانند شکل دهید. ابتدا در آرد و سپس در تخم مرغ و در آخر در مغز نان باگت ریز و خرد شده بغلطانید. در آخر در روغن سرخ کنید . برای اینکه خوش طعم تر شود به تخم مرغ‌تان نمک و فلفل سیاه بیافزایید',2263,1,2,'شام','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.735862',0,0,2),(42,'برنج با مرغ سرخ شده',5,'برای مرحله اول کره را در یک تابه بزرگ ریخته و آن را آب کنید. پیاز و هویج و نخود را در آن ریخته و کمی تفت دهید تا سبزیجات شما نرم و کمی پخته شوند. حالا مرغ را داخل تابه بیندازید و آن را سرخ کنید. در تابه را بگذارید تا مرغ کمی بپزد. بعد از اینکه مرغ پخته شد، سس سویا و ادویه های مورد نظرتان به به همراه تخم مرغ ها در تابه بریزید. توجه داشته باشید که تخم مرغ ها را باید هم بزنید و بعد در تابه بریزید. وقتی تخم مرغ سفت شد، برنج پخته شده را به مواد اضافه کنید برای مرحله آخر پیازچه را نیز اضافه کنید و هم بزنید. اجازه دهید تا مواد چند دقیقه ای با هم گرم شوند و مخلوط شوند. سپس آن را در ظرف ریخته و سرو کنید.',16856,2,3,'ناهار','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.775501',0,0,2),(43,'پاستا گوجه و پنیر فتا',6,'فر را با دمای 400 درجه فارنهایت گرم کنید. در یک تابه بزرگ مناسب فر، گوجه فرنگی، موسیر، سیر و مقداری روغن را مخلوط کنید. سپس به میزان دلخواه نمک و فلفل به آن اضافه کنید. پنیر فتا را در مرکز مخلوط گوجه فرنگی قرار دهید و 1 قاشق غذا خوری روغن زیتون روی آن بریزید. آویشن تازه را روی گوجه فرنگی‌ها قرار دهید. تابه را به مدت 40 تا 45 دقیقه درون فر قرار دهید تا گوجه فرنگی‌ها ترکیده و روی پنیر طلایی رنگ شود. در یک قابلمه بزرگ مقداری آب بریزید تا به جوش بیاید. به آب در حال جوش مقداری نمک اضافه کنید و پاستا‌ها را درون آب بریزید. 2/1 پیمانه از آب پاستا را پیش از آبکش کردن نگه دارید. پس از اینکه پاستا کاملا پخت، آن را آبکش کرده و کنار بگذارید. تابه‌ای که درون فر قرار داده بودید را بیرون بیاورید و آب پاستا را به آن اضافه کنید و همه مواد را با چنگال له کنید. سپس پاستا را به سس اضافه کنید و بهم بزنید تا کاملا مخلوط شود. غذای شما آماده است. می‌توانید با مقداری برگ ریحان آن را تزئین و سرو نمایید.',14463,3,2,'شام','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.812624',0,0,1),(44,'سالاد تن ماهی',6,'مرحله اول پختن تن ماهی قبل از هر کاری لازم است تا کنسرو تن ماهی را در آب بجوشانید. بهترین زمان برای جوشاندن کنسرو تن ماهی 20 دقیقه است. بد نیست بدانید که کنسرو تن ماهی می‌تواند یکی از عوامل ابتلا به مسمومیت بوتولیسم باشد. بوتولیسم یک نوع مسمومیت حاد است که درمان خاصی ندارد و عامل اصلی آن باکتری‌هایی هستند که در محیط غذاهای کنسروی رشد می‌کنند. تنها راه جلوگیری از ابتلا به این مسمومیت، جوشاندن کنسرو پیش از مصرف آن است. مرحله دوم آماده سازی سالادپیاز و خیارشور را به صورت نگینی خرد کنید و درون یک کاسه مناسب بریزید. پس از اینکه کنسرو تن ماهی جوشانده شد، تن ماهی را به همراه روغن آن درون کاسه بریزید. به مواد درون کاسه سس مایونز، سس خردل، نمک، فلفل و پودر آویشن را اضافه کرده و به خوبی بهم بزنید. با استفاده از چنگال تن ماهی را خوب له کنید. سالاد شما حاضر است. مرحله سوم سرو سالاد تن ماهی و خیارشور این سالاد با نان سرو می‌شود. شما می‌توانید از نان باگت یا نان تست برای ساندویچ کردن این سالاد استفاده کنید.',297,1,2,'شام','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.844429',0,0,1),(45,'مک اند چیز',6,'مرحله اول پخت پاستا یک قابلمه بزرگ از آب و کمی نمک را روی حرارت قرار دهید تا به جوش بیاید. در ادامه پاستا را اضافه کنید و تا زمانی که نرم شود آن را بپزید. مرحله دوم ترکیب پاستا، پنیر و ادویه ماکارونی آبکش شده را به قابلمه برگردانید. پنیر پروسس، پنیر چدار و خامه را مخلوط کنید تا پنیرها آب شوند. سپس نمک و فلفل را اضافه کنید و مک اند چیز را درون ظرف سرو بکشید.  می‌توانید ترکیب را در ظرف مناسب بریزید و در فر بگذارید تا روی آن برشته و طلایی شود.',4998,2,1,'شام','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.872959',0,0,2),(46,'ساندویچ آووکادو',6,'اگر از بیکن برای این ساندویچ استفاده میکنید، قبل از هرچیز آن را در روغن سرخ کنید.نان را در توستر یا ماهیتابه نچسب برشته کنید. آووکادو را برش زده و گوجه فرنگی را خلالی خرد کنید. بر روی برش‌های گوجه فرنگی، مقداری نمک بپاشید. دو طرف نان را به سس مایونز آغشته کنید. روی نان پنیر چدار، برش‌های گوجه فرنگی و آووکادو را بچینید. در ادامه بیکن یا کالباس و کاهو را روی آن قرار دهید. تکه دیگر نان را روی ساندویچ قرار دهید و سرو کنید.',12532,1,1,'شام','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.908716',0,0,2),(47,'املت قارچ',6,'قارچ و پیاز را شسته و سپس آن را به صورت نگینی خرد کنید. درون یک ماهیتابه مناسب، پیاز را تفت داده، قارچ را به آن اضافه کرده و حرارت را کم کنید. تخم مرغ را به همراه نمک و فلفل درون یک کاسه کوچک بهم بزنید. پس از اینکه قارچ‌ها نرم شدند، تخم مرغ را به آن اضافه کنید و زمان دهید تا با حرارت ملایم خوب پخته شود. بعد از گذشت چند دقیقه آن را برگردانید تا طرف دیگر املت نیز سرخ شود. در انتها مقداری کره به املت اضافه کنید',7047,1,1,'صبحانه','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.939938',0,0,2),(48,'کوکو سیب زمینی',5,'قبل از شروع سیب‌ زمینی‌ها باید آب پز شوند. سیب ‌زمینی‌ها را شسته و سپس به همراه مقداری آب در یک قابلمه مناسب ریخته و روی حرارت ملایم قرار دهید تا آبپز شوند. پس از گذشت حدود بیست دقیقه سیب زمینی‌ها کاملا پخته خواهند شد. بعد از پخته شدن سیب زمینی‌ها آن‌ها را از آب خارج کرده و زیر آب سرد قرار دهید تا کمی خنک شود. در ادامه پوست سیب زمینی‌ها را بگیرید و آن‌ها را درون یک کاسه مناسب بریزید. برای آماده سازی مایه کوکو سیب زمینی، سیب زمینی‌ها را در کاسه مورد نظر رنده کنید. سپس پیاز را رنده کرده و ادویه و شوید خشک (یا نعنا خشک) را به آن اضافه کنید. در ادامه تخم مرغ را به سیب زمینی‌ها اضافه کنید و مواد را با چنگال یا همزن دستی بهم بزنید تا خوب یکدست شوند. پس از آماده شدن مایه کوکو مقداری روغن درون یک تابه نچسب بریزید و اجازه دهید تا روغن به خوبی داغ شود. در ادامه تمام مایه کوکو را درون روغن ریخته، درب ماهیتابه را بسته و حرارت را کم کنید تا کاملا مغز پخت شود. پس از گذشت چند دقیقه اطراف کوکو را چک کنید. اگر برشته شده باشد، کوکو آماده برعکس کردن است. با استفاده از دو کفگیر مناسب کوکو را برگردانید و طرف دیگر آن را سرخ کنید. چند دقیقه زمان بدهید تا طرف دوم نیز سرخ شود. کوکو سیب زمینی را با خیارشور و گوجه فرنگی سرو کنید و از خوردن آن لذت ببرید.',115,1,1,'شام','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:54.973139',0,0,2),(49,'اشکنه',5,'آرد، زردچوبه و پیازداغ را با مقداری روغن درون یک قابلمه مناسب تفت دهید. بعد از اینکه رنگ آن کمی تغییر کرد، شنبلیله را اضافه کنید و بهم بزنید. سه پیمانه آب را در چند مرحله و کم کم به مخلوط پیاز داغ اضافه کنید و مجددا هم بزنید. سیب زمینی را نگینی خرد کنید و به همراه نمک و فلفل به قابلمه اضافه کنید. 30 دقیقه زمان بدهید تا کاملا بپزد. مراحل پخت این غذا باید با شعله ملایم انجام شود تا آرد غلیظ شود. تخم مرغ ها را در ظرف مناسبی بشکنید و بهم بزنید. در ادامه آن را به قابلمه اضافه کنید و بهم بزنید تا مواد یکنواخت شود. زمانی‌که تخم مرغ خودش را گرفت و پخته شد، اشکنه آماده سرو است.',54,2,2,'ناهار','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:55.016080',0,0,2),(50,'مرغ با سس پستو',6,'ظرف مورد نظرتان را با روغن کمی چرب کنید و مرغ را داخل ظرف فر گذاشته و سس پستو را روی آن اضافه کنید. سپس گوجه‌های حلقه شده را روی موادتان گذاشته و کمی فلفل به آن بزنید و در آخر روی موادتان را خوب با پنیر موزارلا بپوشانید. در آخر ظرف را به مدت ۳۰ دقیقه داخل فر به دمای ۲۰۰ درجه‌ی سانتی‌گراد بگذارید',449,1,2,'ناهار','settings.MEDIA_ROOT/default_recipe.jpg','2023-01-28 14:19:55.052451',0,0,2);
/*!40000 ALTER TABLE `cook_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_recipe_ingredients`
--

DROP TABLE IF EXISTS `cook_recipe_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_recipe_ingredients` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `ingredient_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_recipe_ingredients_recipe_id_ingredient_id_0f4c9d05_uniq` (`recipe_id`,`ingredient_id`),
  KEY `cook_recipe_ingredie_ingredient_id_c856be45_fk_cook_ingr` (`ingredient_id`),
  CONSTRAINT `cook_recipe_ingredie_ingredient_id_c856be45_fk_cook_ingr` FOREIGN KEY (`ingredient_id`) REFERENCES `cook_ingredient` (`id`),
  CONSTRAINT `cook_recipe_ingredie_recipe_id_bccf2e28_fk_cook_reci` FOREIGN KEY (`recipe_id`) REFERENCES `cook_recipe` (`recipe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_recipe_ingredients`
--

LOCK TABLES `cook_recipe_ingredients` WRITE;
/*!40000 ALTER TABLE `cook_recipe_ingredients` DISABLE KEYS */;
INSERT INTO `cook_recipe_ingredients` (`id`, `recipe_id`, `ingredient_id`) VALUES (161,39,9),(162,39,10),(163,39,11),(164,39,12),(165,39,13),(166,39,14),(167,40,15),(168,40,16),(169,40,17),(170,40,18),(171,40,19),(172,40,20),(174,41,16),(180,41,20),(173,41,21),(175,41,22),(176,41,23),(177,41,24),(178,41,25),(179,41,26),(188,42,20),(181,42,27),(182,42,28),(183,42,29),(184,42,30),(185,42,31),(186,42,32),(187,42,33),(189,43,34),(190,43,35),(191,43,36),(192,43,37),(193,43,38),(194,43,39),(195,43,40),(197,44,16),(201,44,20),(196,44,41),(198,44,42),(199,44,43),(200,44,44),(206,45,20),(202,45,45),(203,45,46),(204,45,47),(205,45,48),(210,46,43),(207,46,49),(208,46,50),(209,46,51),(211,46,52),(212,46,53),(213,46,54),(217,47,7),(218,47,20),(214,47,55),(215,47,56),(216,47,57),(223,48,20),(221,48,56),(219,48,58),(220,48,59),(222,48,60),(230,49,20),(225,49,31),(224,49,61),(226,49,62),(227,49,63),(228,49,64),(229,49,65),(236,50,20),(231,50,66),(232,50,67),(233,50,68),(234,50,69),(235,50,70);
/*!40000 ALTER TABLE `cook_recipe_ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_recipe_rated_users`
--

DROP TABLE IF EXISTS `cook_recipe_rated_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_recipe_rated_users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `systemuser_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_recipe_rated_users_recipe_id_systemuser_id_405957ce_uniq` (`recipe_id`,`systemuser_id`),
  KEY `cook_recipe_rated_us_systemuser_id_53b1bf3e_fk_cook_syst` (`systemuser_id`),
  CONSTRAINT `cook_recipe_rated_us_recipe_id_9351f841_fk_cook_reci` FOREIGN KEY (`recipe_id`) REFERENCES `cook_recipe` (`recipe_id`),
  CONSTRAINT `cook_recipe_rated_us_systemuser_id_53b1bf3e_fk_cook_syst` FOREIGN KEY (`systemuser_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_recipe_rated_users`
--

LOCK TABLES `cook_recipe_rated_users` WRITE;
/*!40000 ALTER TABLE `cook_recipe_rated_users` DISABLE KEYS */;
INSERT INTO `cook_recipe_rated_users` (`id`, `recipe_id`, `systemuser_id`) VALUES (1,1,2),(2,1,4);
/*!40000 ALTER TABLE `cook_recipe_rated_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_relationship`
--

DROP TABLE IF EXISTS `cook_relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_relationship` (
  `id` int NOT NULL AUTO_INCREMENT,
  `disciple_id` bigint NOT NULL,
  `jesus_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_relationship_jesus_id_disciple_id_7d449fbd_uniq` (`jesus_id`,`disciple_id`),
  KEY `cook_relationship_disciple_id_5392ca68_fk_cook_systemuser_id` (`disciple_id`),
  CONSTRAINT `cook_relationship_disciple_id_5392ca68_fk_cook_systemuser_id` FOREIGN KEY (`disciple_id`) REFERENCES `cook_systemuser` (`id`),
  CONSTRAINT `cook_relationship_jesus_id_40d886df_fk_cook_chief_id` FOREIGN KEY (`jesus_id`) REFERENCES `cook_chief` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_relationship`
--

LOCK TABLES `cook_relationship` WRITE;
/*!40000 ALTER TABLE `cook_relationship` DISABLE KEYS */;
INSERT INTO `cook_relationship` (`id`, `disciple_id`, `jesus_id`) VALUES (2,2,1),(6,3,1),(5,4,1),(4,1,2),(1,2,2),(3,4,2);
/*!40000 ALTER TABLE `cook_relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_systemuser`
--

DROP TABLE IF EXISTS `cook_systemuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_systemuser` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `role` int NOT NULL,
  `email` varchar(254) NOT NULL,
  `first_name` longtext NOT NULL,
  `last_name` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_systemuser`
--

LOCK TABLES `cook_systemuser` WRITE;
/*!40000 ALTER TABLE `cook_systemuser` DISABLE KEYS */;
INSERT INTO `cook_systemuser` (`id`, `password`, `last_login`, `is_superuser`, `username`, `is_staff`, `is_active`, `date_joined`, `role`, `email`, `first_name`, `last_name`) VALUES (1,'pbkdf2_sha256$390000$H0DWeDbgQb6RXOFLzp1HuO$+B0NbNLKoU5EvAmndZkYXJ2B3kwE5F6hkEoKyOpKH8k=','2023-01-25 08:34:01.174502',0,'aj',0,1,'2023-01-25 08:02:00.778488',2,'aj@gmail.com','ali','javanmard'),(2,'pbkdf2_sha256$390000$Dc0N8iPGT2fLWooBcvw7Qe$VNT5lq7SvY5rdQ5zrKH4pXBb1nCDDiHE2CwqXpLfvTQ=','2023-01-25 08:33:52.645486',0,'rezasoumi',0,1,'2023-01-25 08:02:18.901606',1,'rezasoumi7@gmail.com@gmail.com','reza','soumi'),(3,'pbkdf2_sha256$390000$sBP1wyB1ulDLVUvE8MHGRI$iX9vK0ZsHkXuak2MBdGvLXnXACuBfW/McLPuL6PdvBo=','2023-01-25 08:34:09.485124',0,'hamidkalbasi',0,1,'2023-01-25 08:02:35.616657',2,'hamidrezakalbasi@protonmail.com','hamid','kalbasi'),(4,'pbkdf2_sha256$390000$miWbfheih2ocyIUfyFa0xV$ofK5RebHpzSRgZIQnvxhi/ps40cKdkdWV5/QBpxdZg8=','2023-01-25 08:34:18.373310',0,'parsasalavati',0,1,'2023-01-25 08:02:52.659345',1,'parsasalavati@gmail.com','parsa','salavati'),(5,'pbkdf2_sha256$390000$NpQaiPDfYhuw5l5cPTBBqC$hi6HD6wjLysXrZTn8vSiYy0mmfw5CGtfW8w8S7oHwPI=',NULL,1,'admin',1,1,'2023-01-25 08:37:37.565026',3,'admin@gmail.com','','');
/*!40000 ALTER TABLE `cook_systemuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_systemuser_groups`
--

DROP TABLE IF EXISTS `cook_systemuser_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_systemuser_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `systemuser_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_systemuser_groups_systemuser_id_group_id_48336d32_uniq` (`systemuser_id`,`group_id`),
  KEY `cook_systemuser_groups_group_id_37fd3318_fk_auth_group_id` (`group_id`),
  CONSTRAINT `cook_systemuser_grou_systemuser_id_4a408c9e_fk_cook_syst` FOREIGN KEY (`systemuser_id`) REFERENCES `cook_systemuser` (`id`),
  CONSTRAINT `cook_systemuser_groups_group_id_37fd3318_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_systemuser_groups`
--

LOCK TABLES `cook_systemuser_groups` WRITE;
/*!40000 ALTER TABLE `cook_systemuser_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `cook_systemuser_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_systemuser_user_permissions`
--

DROP TABLE IF EXISTS `cook_systemuser_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_systemuser_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `systemuser_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cook_systemuser_user_per_systemuser_id_permission_b257ad5e_uniq` (`systemuser_id`,`permission_id`),
  KEY `cook_systemuser_user_permission_id_e1301b2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `cook_systemuser_user_permission_id_e1301b2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `cook_systemuser_user_systemuser_id_870c7f4d_fk_cook_syst` FOREIGN KEY (`systemuser_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_systemuser_user_permissions`
--

LOCK TABLES `cook_systemuser_user_permissions` WRITE;
/*!40000 ALTER TABLE `cook_systemuser_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `cook_systemuser_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cook_ticket`
--

DROP TABLE IF EXISTS `cook_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cook_ticket` (
  `ticket_id` int NOT NULL AUTO_INCREMENT,
  `category` int NOT NULL,
  `status` int NOT NULL,
  `text` longtext NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `cook_ticket_user_id_17ebfe63_fk_cook_systemuser_id` (`user_id`),
  CONSTRAINT `cook_ticket_user_id_17ebfe63_fk_cook_systemuser_id` FOREIGN KEY (`user_id`) REFERENCES `cook_systemuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cook_ticket`
--

LOCK TABLES `cook_ticket` WRITE;
/*!40000 ALTER TABLE `cook_ticket` DISABLE KEYS */;
INSERT INTO `cook_ticket` (`ticket_id`, `category`, `status`, `text`, `user_id`) VALUES (1,1,4,'I would like to be upgraded to a chief\n***\nNeed your respond.\n***\nProvided you with the requirements.\n***\nThe task is done.',3),(2,1,4,'I would like to be upgraded to a chief\n***\nNeed your respond.\n***\nProvided you with the requirements.\n***\nThe task is done.',1);
/*!40000 ALTER TABLE `cook_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_cook_systemuser_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_cook_systemuser_id` FOREIGN KEY (`user_id`) REFERENCES `cook_systemuser` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (11,'admin','logentry'),(13,'auth','group'),(12,'auth','permission'),(14,'contenttypes','contenttype'),(2,'cook','chief'),(9,'cook','comment'),(3,'cook','foodstuff'),(4,'cook','forum'),(8,'cook','forummessage'),(5,'cook','ingredient'),(7,'cook','recipe'),(10,'cook','relationship'),(1,'cook','systemuser'),(6,'cook','ticket'),(15,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (1,'contenttypes','0001_initial','2023-01-28 13:53:26.314786'),(2,'contenttypes','0002_remove_content_type_name','2023-01-28 13:53:26.353304'),(3,'auth','0001_initial','2023-01-28 13:53:26.527058'),(4,'auth','0002_alter_permission_name_max_length','2023-01-28 13:53:26.569207'),(5,'auth','0003_alter_user_email_max_length','2023-01-28 13:53:26.575003'),(6,'auth','0004_alter_user_username_opts','2023-01-28 13:53:26.581408'),(7,'auth','0005_alter_user_last_login_null','2023-01-28 13:53:26.587327'),(8,'auth','0006_require_contenttypes_0002','2023-01-28 13:53:26.590323'),(9,'auth','0007_alter_validators_add_error_messages','2023-01-28 13:53:26.597179'),(10,'auth','0008_alter_user_username_max_length','2023-01-28 13:53:26.603537'),(11,'auth','0009_alter_user_last_name_max_length','2023-01-28 13:53:26.610108'),(12,'auth','0010_alter_group_name_max_length','2023-01-28 13:53:26.623313'),(13,'auth','0011_update_proxy_permissions','2023-01-28 13:53:26.630001'),(14,'auth','0012_alter_user_first_name_max_length','2023-01-28 13:53:26.636897'),(15,'cook','0001_initial','2023-01-28 13:53:27.874933'),(16,'admin','0001_initial','2023-01-28 13:53:27.974638'),(17,'admin','0002_logentry_remove_auto_add','2023-01-28 13:53:27.990912'),(18,'admin','0003_logentry_add_action_flag_choices','2023-01-28 13:53:28.005612'),(19,'sessions','0001_initial','2023-01-28 13:53:28.036670'),(20,'cook','0002_alter_recipe_price','2023-01-28 14:19:41.618627');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-28 17:50:34
