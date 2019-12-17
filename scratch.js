//load prompts (main menu)
function loadPrompts(){
    view emloyees
    view employees by department
    ...
}

// if statement to call choice above
function viewEmployees(){
    //query the db for what they need
    select * from employees allEmployees =>
    console.log(allEmployees)
    loadPrompts();
}

//always hard code new employee - don't use inquirer until you have all components working
function addEmployee(){
    //two callbacks or two promises 
    //have to get a role and 
    findAllRoles.then(){
        //prompt for roles
        const roleid = inquirer prompt;
            //hard code employee 
        then query to add employee
        //then 
        findAllEmployees.then() {
            const managerid = prompt
            query to add employee to table
        }
    }
}