-- Active: 1687822827896@@127.0.0.1@3306@business_db
USE business_db;

INSERT INTO department 
        (name)
VALUES 
        ("Executive-Management"),
        ("Management"),
        ("Employees");

INSERT INTO employee 
        (first_name, last_name, role_id, manager_id)
VALUES
        ('Bobby', 'Bob', 1, 1),
        ('Marky', 'Mark', 1, 2),
        ('Hopey', 'Hope', 2, 1),
        ('Keithy', 'Keith', 2, 2),
        ('Richy', 'Rich', 3, 3),
        ('Acey', 'Ace', 3, 4);

INSERT INTO role 
        (title, salary, department_id)
VALUES 
        ('CEO', 1000000, 1),
        ('Branch-Manager', 200000, 2),
        ('Customer-Representative', 25000, 3)