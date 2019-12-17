/*employee seeds */
USE employee_DB;

/* Department Seeds */
INSERT INTO employees (first_name, last_name, role_id) values ("Ryan", "D'Souza", "1");
INSERT INTO employees (first_name, last_name, role_id) values ("Meghan", "McCarthy", "3");
INSERT INTO employees (first_name, last_name, role_id) values ("Lindsey", "Bly", "4");
INSERT INTO employees (first_name, last_name, role_id) values ("Elizabeth", "Rice", "6");
INSERT INTO employees (first_name, last_name, role_id) values ("Marina", "Souza", "5");


INSERT INTO roles (title, salary) values ("President", "600000");
INSERT INTO roles (title, salary) values ("Marketing Manager", "75000");
INSERT INTO roles (title, salary) values ("Admin", "35000");


INSERT INTO department (department_name) values ("Executive");
INSERT INTO department (department_name) values ("Marketing");
INSERT INTO department (department_name) values ("Operations");




