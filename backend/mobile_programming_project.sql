-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 22, 2022 at 05:58 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobile_programming_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` int(11) NOT NULL,
  `announcement_title` varchar(511) NOT NULL,
  `announcement_link` varchar(511) NOT NULL,
  `announcement_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `announcement_title`, `announcement_link`, `announcement_date`) VALUES
(1, ' İUCyber Kulübü Yeni Dönem Başkan Seçimi', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/iucyber-kulubu-yeni-donem-baskan-secimi-47007200310056006E0042004F0049006C0073006E0039007900700046006200610041004F003200370077003200', '2005-06-20'),
(2, ' Öğrenci Memnuniyet Anketi', 'https://kalite.istanbulc.edu.tr/tr/duyuru/ogrenci-memnuniyet-anketi-6F00650076002D00430053003200590047004200480039007900700046006200610041004F003200370077003200', '2008-06-20'),
(3, ' 2022-2023 Güz Yarıyılı LİSANSÜSTÜ MÜLAKAT SINAVLARI DUYURUSU', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/2022-2023-guz-yariyili-lisansustu-mulakat-sinavlari-duyurusu-520036002D0035004E00330055006D0046006D00500039007900700046006200610041004F003200370077003200', '2028-06-20'),
(4, ' Yenilikçi Yazılımlar Yarışıyor (Y3) 3. Dönem Yarışma Programı', 'https://y3.ssyz.org.tr/', '2005-07-20'),
(5, ' İnsan Hakları Temalı Makale Yarışması', 'https://muhendislik.istanbulc.edu.tr/tr/duyuru/insan-haklari-temali-makale-yarismasi-hk-6500390079003300620030007900450073006D00370039007900700046006200610041004F003200370077003200', '2007-07-20'),
(6, ' RATEM İletişim Fikirleri Yarışması \"Aklıma Bir Fikir Geldi\" (Son Başvuru 18 Kasım 2022)', 'https://www.aklimabirfikirgeldi.org/', '2007-07-20'),
(7, ' 2022-2023 Eğitim Öğretim Dönemi Hazırlık Sınıfları Çevrimiçi Yapılacaktır', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/2022-2023-egitim-ogretim-donemi-hazirlik-siniflari-cevrimici-yapilacaktir-2D0062002D005F00390063002D00530072006600660039007900700046006200610041004F003200370077003200', '2008-08-20'),
(8, ' 7417 Sayılı Kanunla Düzenlenen Öğrenci Affı', 'https://lisansustuegitim.iuc.edu.tr/tr/duyuru/7417-sayili-kanunla-duzenlenen-ogrenci-affi-74005000360042007900350036004D00350042005F0039007900700046006200610041004F003200370077003200', '2018-08-20'),
(9, ' Ek1 ve Ek2 Sınav Programı ve girmeye hak kazananların listesi', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/ek1-ve-ek2-sinav-programi-ve-girmeye-hak-kazananlarin-listesi-33006E007200460033004E006100490044006E00660039007900700046006200610041004F003200370077003200', '2024-08-20'),
(10, ' 2022-2023 Güz Dönemi Ders Programları Güncellendi.', 'https://bilgisayarmuhendislik.istanbulc.edu.tr/tr/content/egitim/ders-programlari', '2002-09-20'),
(11, ' 2022-2023 Döneminde yeni açılan Lisans Dersleri hk.(Karmaşık Mühendislik Tasarımı, Cloud Computing Applications)', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/2022-2023-doneminde-yeni-acilan-lisans-dersleri-hk-karmasik-muhendislik-tasarimi-49005F0077006B00510078007400590069003000720039007900700046006200610041004F003200370077003200', '2009-09-20'),
(12, ' @ogr.iuc.edu.tr Uzantılı E-Posta Oluşturma Kılavuzu', 'https://cdn.istanbulc.edu.tr/FileHandler2.ashx?f=e-posta-olusturma-kilavuzu.pdf', '2019-09-20'),
(13, ' 26 Eylül - 3 Ekim Ek1 ve Ek2 Sınav programı', 'https://cdn.istanbulc.edu.tr/FileHandler2.ashx?f=20220926-ek1ek2-sinavprogrami-3.pdf', '2026-09-20'),
(14, ' Türk Eğitim Vakfı Burs Başvuruları Başlamıştır. (Son Başvuru 2 Ekim)', 'https://www.tev.org.tr/burs/tr', '2026-09-20'),
(15, ' İstanbul Sanayi Odası Vakfı Bursları (Son Başvuru 30 Eylül)', 'https://www.isov.org.tr/%C4%B0SOV-Burslar%C4%B1', '2026-09-20'),
(16, ' Siber Güvenlik A.B.D. Bitirme Projesi Konu Başlıkları', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/siber-guvenlik-a-b-d-bitirme-projesi-konu-basliklari-6E0062004F00410051007A004900450056004B00760039007900700046006200610041004F003200370077003200', '2011-10-20'),
(17, ' Huawei ICT Akademi Öğrenci Teşviki 10 Ekim- 30 Kasım 2022', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/huawei-ict-akademi-ogrenci-tesviki-10-ekim-30-kasim-2022-3300430072005400420055005400740041004A00480039007900700046006200610041004F003200370077003200', '2018-10-20'),
(18, ' 2022-2023 Güz Dönem Lisans Sınav Programları ilan edildi.', 'https://bilgisayarmuhendislik.istanbulc.edu.tr/tr/content/egitim/sinav-programlari', '2024-10-20'),
(19, ' Devlet Teşvikleri Tanıtım Günleri (27-28 Ekim)', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/devlet-tesvikleri-tanitim-gunleri-27-28-ekim-5A00740030004E00640064006D00340063004A00620039007900700046006200610041004F003200370077003200', '2025-10-20'),
(20, ' 2022-2023 HUAWEI ICT Competition Süreci Hakkında', 'https://bilgisayarmuhendislik.iuc.edu.tr/tr/duyuru/2022-2023-huawei-ict-competition-sureci-hakkinda-75004E004F0045006C004300590077004B005600580039007900700046006200610041004F003200370077003200', '2001-11-20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
