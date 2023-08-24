const mySql = require('mysql2')
const inquirer = require('inquirer')

/* const dbConnection = mySql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'starcraft',
        database: 'business_db'
    },
    console.log('Successfully connected!')
); */

const CLI = () => inquirer.prompt([
    {
        type: 'list',
        message: `What would you like to do?`,
        choices: ['View All Employees...','Add An Employee...', 'Update Employee Role...', 'View All Roles...', 'Add A Role...', 'View All Departments...', 'Add A Department...', 'Quit Menu'], 
        name: `main`
    }
])
.then(response => {
    switch (response.main) {
        case "View All Employees...":
        viewEmployees()
        break;
        
        case "Add An Employee...":
        addEmployee();
        break;

        case "Update Employee Role...":
        updateEmployee()
        break;

        case "View All Roles...":
        viewRoles()
        break;

        case "Add A Role...":
        addRole()
        break;

        case "View All Departments...":
        viewDepartments()
        break;

        case "Add A Department...":
        addDepartment()
        break;

        case "Quit Menu":
        process.exit()
        break;
    }
});


const addDepartment = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your new department?',
        name: 'department'
    }

])
.then(response => {
    console.log(`New department, ${response.department}, has been added!`)
    CLI()
});

const addEmployee = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the first name of this new employee?',
        name: 'first'
    },
    {
        type: 'input',
        message: 'What is the last name of this new employee?',
        name: 'last'
    }

])
.then(response => {
    console.log(`New employee, ${response.first} ${response.last}, has been added!`)
    CLI()
});

const addRole = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of this new role?',
        name: 'role'
    }

])
.then(response => {
    console.log(`New role, ${response.role}, has been added!`)
    CLI()
});

const viewDepartments = () => inquirer.prompt([
])
.then(response => {
    console.log(`All departments are listed below...`)
    CLI()
});

const viewEmployees = () => inquirer.prompt([
])
.then(response => {
    console.log(`All employees are listed below...`)
    CLI()
});

const viewRoles = () => inquirer.prompt([
])
.then(response => {
    console.log(`All roles are listed below...`)
    CLI()
});

const updateEmployee = () => inquirer.prompt([
    {
        type: 'list',
        message: 'What is the new role for this employee?',
        choices: ['1', '2', '3'],
        name: 'role'
    }
])
.then(response => {
    console.log(`Employee has been assigned this new role!`)
    CLI()
});



CLI()