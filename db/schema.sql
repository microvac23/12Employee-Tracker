DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE department {
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30)
};

CREATE TABLE employee {
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    role_id INT,
    manager_id INT
};

CREATE TABLE role {
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
};
