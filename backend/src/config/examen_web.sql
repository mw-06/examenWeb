CREATE DATABASE `examen_web`;

CREATE TABLE `examen_web`.`autos` (
  `autoID` INT NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(50) NOT NULL,
  `marca` VARCHAR(60) NOT NULL,
  `anio` CHAR(4) NOT NULL,
  `color` VARCHAR(20) NULL,
  PRIMARY KEY (`autoID`));