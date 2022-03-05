DROP DATABASE cyberdudes;

CREATE DATABASE cyberdudes;

USE cyberdudes;

CREATE TABLE form(
Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
Pais VARCHAR(30) NOT NULL,
Fecha_actual DATE NOT NULL,
Fecha_suceso DATE NOT NULL,
Estado VARCHAR(30) NOT NULL,
Municipio VARCHAR(30) NOT NULL,
Domicilio_suceso VARCHAR(30) NOT NULL,
nombre_denunciante VARCHAR(40) NOT NULL,
Nombre_Denunciado VARCHAR(40) NOT NULL,
Sexo_denunciante VARCHAR(11) NOT NULL DEFAULT "",
Edad_denunciante VARCHAR(3) NOT NULL DEFAULT "",
Ocupacion_Denunciante TEXT,   
Ocupacion_Denunciado TEXT NOT NULL,    
Suceso_ocurrido TEXT NOT NULL,
Correo VARCHAR(50),
Folio VARCHAR(12) UNIQUE NOT NULL,
Anonimo TINYINT(1) DEFAULT 0
);