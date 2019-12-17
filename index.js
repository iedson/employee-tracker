const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Isaiah40:31",
  database: "employee_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "cms",
      type: "list",
      message: "What would you like to do?",
      choices: ["View Employees", "View Departments ", "View Roles", "Add Employee", "Add Department", "Add Role", "Update Employee", "Finish"]
    })
    //then run function based on answer
    .then(function(answer) {
      //view all employees
      if (answer.cms === "View Employees") {
        viewEmployees();
      }
      // //view all departments
      else if(answer.cms === "View Department") {
        viewDepartment();
      } 
      //view all roles
      else if(answer.cms === "View Roles"){
        viewRoles();
      }
      //add new employee
      else if(answer.cms === "Add Employee"){
        addEmployee();
      }
      //Finish CMS Database
      else {
        connection.end();
      }
    });
}

//Function to View All Employees 
function viewEmployees() {
  // query employees table 
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

//Function to View All Roles
function viewRoles() {
  // query employees table 
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

//Function to View All Departments
function viewDepartment() {
  // query employees table 
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}


// function to add new employee to table
function addEmployee() {
  // prompt for info about the employee
  inquirer
    .prompt([
      {
        name: "empFName",
        type: "input",
        message: "What is the first name of your employee?"
      },
      {
        name: "empLName",
        type: "input",
        message: "What is the last name of your employee?"
      },
      {
        name: "empID",
        type: "input",
        message: "What is your employee's role id?",
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answer.empFName,
          last_name: answer.empLName,
          role_id: answer.empID || 3,
        },
        function(err) {
          if (err) throw err;
          console.log("Your new employee was added!");
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });
}





// // call once somewhere in the beginning of the app
// const cTable = require('console.table');
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// // prints
// name  age
// ----  ---
// foo   10
// bar   20

