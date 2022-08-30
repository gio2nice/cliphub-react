DROP DATABASE IF EXISTS barber_db;
CREATE DATABASE barber_db;  

USE barber_db;

CREATE TABLE barber (
    barber_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    barber_name VARCHAR(50) NOT NULL,
    barber_email VARCHAR(50) NOT NULL,
    bio VARCHAR(180) NOT NULL,
    barber_phone_number INT NOT NULL
)

CREATE TABLE customer (
    customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    customer_email VARCHAR(50) NOT NULL,
    customer_phone_number INT NOT NULL

)

CREATE TABLE appointment (
    appointment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    time_id INT NOT NULL AUTO_INCREMENT,
    service_id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL AUTO_INCREMENT FOREIGN KEY,
    barber_id INT NOT NULL AUTO_INCREMENT FOREIGN KEY 
)

CREATE TABLE portfolio (
    portfolio_id PRIMARY KEY,
    barber_id FOREIGN KEY
)