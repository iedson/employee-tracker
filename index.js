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
      // else if(answer.cms === "View Department") {
      //   viewDepartments();
      // } 
      // //view all roles
      // else if(answer.cms === "View Roles"){
      //   viewRoles();
      // }
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

// // function to post new employee to table
// function postAuction() {
//   // prompt for info about the employee
//   inquirer
//     .prompt([
//       {
//         name: "item",
//         type: "input",
//         message: "What is the item you would like to submit?"
//       },
//       {
//         name: "category",
//         type: "input",
//         message: "What category would you like to place your auction in?"
//       },
//       {
//         name: "startingBid",
//         type: "input",
//         message: "What would you like your starting bid to be?",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       // when finished prompting, insert a new item into the db with that info
//       connection.query(
//         "INSERT INTO auctions SET ?",
//         {
//           item_name: answer.item,
//           category: answer.category,
//           starting_bid: answer.startingBid || 0,
//           highest_bid: answer.startingBid || 0
//         },
//         function(err) {
//           if (err) throw err;
//           console.log("Your auction was created successfully!");
//           // re-prompt the user for if they want to bid or post
//           start();
//         }
//       );
//     });
// }





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

