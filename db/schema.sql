DROP DATABASE IF EXISTS barber_db;
CREATE DATABASE barber_db;  

USE barber_db;

CREATE TABLE barber (
    barber_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    barber_name VARCHAR(50) NOT NULL,
    barber_email VARCHAR(50) NOT NULL,
    barber_password INT NOT NULL VARCHAR(25),
    bio VARCHAR(180) NOT NULL,
    barber_phone_number INT NOT NULL
)

CREATE TABLE customer (
    customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    customer_email VARCHAR(50) NOT NULL,
    customer_password INT NOT NULL VARCHAR(25),
    customer_phone_number INT NOT NULL

)

CREATE TABLE appointment (
    appointment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    time INT NOT NULL,  
    service_id INT NOT NULL AUTO_INCREMENT FOREIGN KEY,
    customer_id INT NOT NULL AUTO_INCREMENT FOREIGN KEY,
    barber_id INT NOT NULL AUTO_INCREMENT FOREIGN KEY 
)

-- CREATE TABLE portfolio (
--     portfolio_id PRIMARY KEY,
--     barber_id FOREIGN KEY
-- )

CREATE TABLE service (
    service_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    service_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
)