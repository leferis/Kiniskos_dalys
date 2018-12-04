
CREATE TABLE IF NOT EXISTS `ar_internal_metadata` (
  `key` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ar_internal_metadata`
--

INSERT INTO `ar_internal_metadata` (`key`, `value`, `created_at`, `updated_at`) VALUES
('environment', 'development', '2018-12-02 20:43:19', '2018-12-02 20:43:19');

-- --------------------------------------------------------

--
-- Table structure for table `atsiliepimas`
--

CREATE TABLE IF NOT EXISTS `atsiliepimas` (
  `ID` int(11) NOT NULL DEFAULT '0',
  `Data` date NOT NULL,
  `Teigiamas` tinyint(1) NOT NULL,
  `Aprasymas` varchar(255) NOT NULL,
  `fk_AutomobilisID` int(11) NOT NULL,
  `fk_DalisID` int(11) NOT NULL,
  `fk_RemontasID` int(11) NOT NULL,
  `fk_KlientasID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `pakaitinis_turi` (`fk_AutomobilisID`),
  KEY `ivertina` (`fk_DalisID`),
  KEY `raso` (`fk_KlientasID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `automobilis`
--

CREATE TABLE IF NOT EXISTS `automobilis` (
  `ID` int(11) NOT NULL,
  `VIN` varchar(255) NOT NULL,
  `Marke` varchar(255) NOT NULL,
  `Modelis` varchar(255) NOT NULL,
  `Kubatura` double NOT NULL,
  `Gamybos_Metai` date NOT NULL,
  `Registracijos_numeris` varchar(255) NOT NULL,
  `Pakaitinis_Auto` tinyint(1) NOT NULL,
  `Kuras` varchar(15) NOT NULL,
  `fk_KlientasID` int(11) DEFAULT NULL,
  `fk_ImoneImones_Kodas` varchar(255) NOT NULL,
  `fk_KlientasIDNaudot` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `fk_KlientasID` (`fk_KlientasID`),
  KEY `turi_pakaitinius` (`fk_ImoneImones_Kodas`),
  KEY `turi` (`fk_KlientasIDNaudot`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dalis`
--

CREATE TABLE IF NOT EXISTS `dalis` (
  `Matmenys` varchar(255) DEFAULT NULL,
  `ID` int(11) NOT NULL,
  `Kilme` varchar(255) NOT NULL,
  `Svoris` double NOT NULL,
  `Aukstis` double NOT NULL,
  `Ilgis` double DEFAULT NULL,
  `Plotis` double DEFAULT NULL,
  `Pavadinimas` varchar(255) NOT NULL,
  `Pirkimo_Kaina` double NOT NULL,
  `Pardavimo_Kaina` double NOT NULL,
  `Kategorija` varchar(15) NOT NULL,
  `fk_UžsakymasId` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `uzsako` (`fk_UžsakymasId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `darbuotojas`
--

CREATE TABLE IF NOT EXISTS `darbuotojas` (
  `tabelio_nr` int(11) NOT NULL,
  `Vardas` varchar(255) NOT NULL,
  `Pavarde` varchar(255) NOT NULL,
  `Pareigos` varchar(255) NOT NULL,
  `Slaptazodis` varchar(255) NOT NULL,
  `RemontasID` int(11) NOT NULL,
  `fk_ImoneImones_Kodas` varchar(255) NOT NULL,
  PRIMARY KEY (`tabelio_nr`),
  UNIQUE KEY `fk_RemontasID` (`RemontasID`),
  KEY `dirba` (`fk_ImoneImones_Kodas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `gedimas`
--

CREATE TABLE IF NOT EXISTS `gedimas` (
  `ID` int(11) NOT NULL DEFAULT '0',
  `Aprasymas` varchar(255) NOT NULL,
  `Kategorija` varchar(15) DEFAULT NULL,
  `fk_RemontasID` int(11) NOT NULL,
  `fk_AutomobilisID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `fk_RemontasID` (`fk_RemontasID`),
  KEY `turi1` (`fk_AutomobilisID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `imone`
--

CREATE TABLE IF NOT EXISTS `imone` (
  `Imones_Kodas` varchar(255) NOT NULL,
  `Pavadinimas` varchar(255) NOT NULL,
  `Adresas` varchar(255) NOT NULL,
  `Tel_nr` varchar(255) NOT NULL,
  `El_pastas` varchar(255) NOT NULL,
  `Kodas` varchar(255) NOT NULL,
  PRIMARY KEY (`Imones_Kodas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `klientas`
--

CREATE TABLE IF NOT EXISTS `klientas` (
  `ID` int(11) NOT NULL,
  `Slapyvardis` varchar(255) DEFAULT NULL,
  `Vardas` varchar(255) NOT NULL,
  `Pavarde` varchar(255) NOT NULL,
  `Slaptazodis` varchar(255) NOT NULL,
  `Tipas` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `klientas`
--

INSERT INTO `klientas` (`ID`, `Slapyvardis`, `Vardas`, `Pavarde`, `Slaptazodis`, `Tipas`) VALUES
(1, 'Pranux', 'Pranas', 'Virma', 'asdasd', 'Darbuotoja'),
(2, 'Pranux', 'Pranas', 'Virma', 'asdasd', 'Worker'),
(3, NULL, 'Peter', 'DAFAQW', 'SDA', 'Worker'),
(4, 'asd', 'Peter', 'DAFAQW', 'SDA', 'Worker');

-- --------------------------------------------------------

--
-- Table structure for table `pageidavimas`
--

CREATE TABLE IF NOT EXISTS `pageidavimas` (
  `ID` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Tekstas` varchar(255) NOT NULL,
  `Tipas` varchar(15) NOT NULL,
  `fk_KlientasID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `pateikia` (`fk_KlientasID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `remontas`
--

CREATE TABLE IF NOT EXISTS `remontas` (
  `ID` int(11) NOT NULL,
  `Pradzia` date NOT NULL,
  `Numatoma_pabaiga` date DEFAULT NULL,
  `Remonto_kaina` double NOT NULL,
  `Baigtas` tinyint(1) NOT NULL,
  `fk_UžsakymasId` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `uzsako1` (`fk_UžsakymasId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `saskaita`
--

CREATE TABLE IF NOT EXISTS `saskaita` (
  `id` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Suma` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `schema_migrations`
--

CREATE TABLE IF NOT EXISTS `schema_migrations` (
  `version` varchar(255) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `trukstama_dalis`
--

CREATE TABLE IF NOT EXISTS `trukstama_dalis` (
  `Data` date NOT NULL,
  `Dalis` varchar(255) NOT NULL,
  `id_Trukstama_Dalis` int(11) NOT NULL DEFAULT '0',
  `fk_Darbuotojastabelio_nr` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Trukstama_Dalis`),
  UNIQUE KEY `fk_Darbuotojastabelio_nr` (`fk_Darbuotojastabelio_nr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `trukstama_dalis_darbuotojas`
--

CREATE TABLE IF NOT EXISTS `trukstama_dalis_darbuotojas` (
  `fk_Trukstama_Dalisid_Trukstama_Dalis` int(11) NOT NULL DEFAULT '0',
  `fk_Darbuotojastabelio_nr` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`fk_Trukstama_Dalisid_Trukstama_Dalis`,`fk_Darbuotojastabelio_nr`),
  KEY `fk_Darbuotojastabelio_nr` (`fk_Darbuotojastabelio_nr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `užsakymas`
--

CREATE TABLE IF NOT EXISTS `užsakymas` (
  `Id` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Gražinimo_data` date NOT NULL,
  `Busena` varchar(15) NOT NULL,
  `fk_Saskaitatabelio_nr` int(11) NOT NULL,
  `fk_KlientasID` int(11) NOT NULL,
  `fk_AutomobilisID` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `fk_Saskaitatabelio_nr` (`fk_Saskaitatabelio_nr`),
  UNIQUE KEY `fk_KlientasID` (`fk_KlientasID`),
  UNIQUE KEY `fk_AutomobilisID` (`fk_AutomobilisID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Constraints for dumped tables
--

--
-- Constraints for table `atsiliepimas`
--
ALTER TABLE `atsiliepimas`
  ADD CONSTRAINT `ivertina` FOREIGN KEY (`fk_DalisID`) REFERENCES `dalis` (`ID`),
  ADD CONSTRAINT `pakaitinis_turi` FOREIGN KEY (`fk_AutomobilisID`) REFERENCES `automobilis` (`ID`),
  ADD CONSTRAINT `raso` FOREIGN KEY (`fk_KlientasID`) REFERENCES `klientas` (`ID`);

--
-- Constraints for table `automobilis`
--
ALTER TABLE `automobilis`
  ADD CONSTRAINT `naudojasi_pakaitiniu` FOREIGN KEY (`fk_KlientasID`) REFERENCES `klientas` (`ID`),
  ADD CONSTRAINT `turi` FOREIGN KEY (`fk_KlientasIDNaudot`) REFERENCES `klientas` (`ID`),
  ADD CONSTRAINT `turi_pakaitinius` FOREIGN KEY (`fk_ImoneImones_Kodas`) REFERENCES `imone` (`Imones_Kodas`);

--
-- Constraints for table `dalis`
--
ALTER TABLE `dalis`
  ADD CONSTRAINT `uzsako` FOREIGN KEY (`fk_UžsakymasId`) REFERENCES `užsakymas` (`Id`);

--
-- Constraints for table `darbuotojas`
--
ALTER TABLE `darbuotojas`
  ADD CONSTRAINT `Darbuotojas_ibfk_1` FOREIGN KEY (`RemontasID`) REFERENCES `remontas` (`ID`),
  ADD CONSTRAINT `dirba` FOREIGN KEY (`fk_ImoneImones_Kodas`) REFERENCES `imone` (`Imones_Kodas`);

--
-- Constraints for table `gedimas`
--
ALTER TABLE `gedimas`
  ADD CONSTRAINT `sutvarko` FOREIGN KEY (`fk_RemontasID`) REFERENCES `remontas` (`ID`),
  ADD CONSTRAINT `turi1` FOREIGN KEY (`fk_AutomobilisID`) REFERENCES `automobilis` (`ID`);

--
-- Constraints for table `pageidavimas`
--
ALTER TABLE `pageidavimas`
  ADD CONSTRAINT `pateikia` FOREIGN KEY (`fk_KlientasID`) REFERENCES `klientas` (`ID`);

--
-- Constraints for table `remontas`
--
ALTER TABLE `remontas`
  ADD CONSTRAINT `uzsako1` FOREIGN KEY (`fk_UžsakymasId`) REFERENCES `užsakymas` (`Id`);

--
-- Constraints for table `trukstama_dalis`
--
ALTER TABLE `trukstama_dalis`
  ADD CONSTRAINT `Trukstama_Dalis_ibfk_1` FOREIGN KEY (`fk_Darbuotojastabelio_nr`) REFERENCES `darbuotojas` (`tabelio_nr`);

--
-- Constraints for table `trukstama_dalis_darbuotojas`
--
ALTER TABLE `trukstama_dalis_darbuotojas`
  ADD CONSTRAINT `Trukstama_Dalis_Darbuotojas_ibfk_1` FOREIGN KEY (`fk_Trukstama_Dalisid_Trukstama_Dalis`) REFERENCES `trukstama_dalis` (`id_Trukstama_Dalis`),
  ADD CONSTRAINT `Trukstama_Dalis_Darbuotojas_ibfk_2` FOREIGN KEY (`fk_Darbuotojastabelio_nr`) REFERENCES `darbuotojas` (`tabelio_nr`);

--
-- Constraints for table `užsakymas`
--
ALTER TABLE `užsakymas`
  ADD CONSTRAINT `apmoka` FOREIGN KEY (`fk_Saskaitatabelio_nr`) REFERENCES `saskaita` (`id`),
  ADD CONSTRAINT `atlieka` FOREIGN KEY (`fk_KlientasID`) REFERENCES `klientas` (`ID`),
  ADD CONSTRAINT `užsisako` FOREIGN KEY (`fk_AutomobilisID`) REFERENCES `automobilis` (`ID`);
