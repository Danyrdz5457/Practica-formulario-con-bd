CREATE DATABASE IF NOT EXISTS cafeteria_central
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE cafeteria_central;

CREATE TABLE IF NOT EXISTS pedidos (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  cliente        VARCHAR(100) NOT NULL,
  correo         VARCHAR(150) NOT NULL,
  producto       VARCHAR(50)  NOT NULL,
  cantidad       INT          NOT NULL,
  tamanio        VARCHAR(20)  NOT NULL,
  llevar         VARCHAR(5)   NOT NULL DEFAULT 'No',
  observaciones  TEXT,
  fecha_registro DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
