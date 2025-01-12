let employeesList = [];

function Employee(legajo, name, lastName, birth, position){
    this.legajo = legajo;
    this.name = name;
    this.lastName = lastName;
    this.birth = birth; 
    this.position = position;
}

function addEmployee(){
    let legajo = document.getElementById('legajoEmp').value;
    let name = document.getElementById('nameEmp').value;
    let lastName = document.getElementById('lastNameEmp').value;
    let birth = document.getElementById('birthDate').value;  
    let position = document.getElementById('positionEmp').value;

    //let birthDate = new Date(birth);
    //let formattedDate = `${birthDate.getDate().toString().padStart(2, '0')}/${(birthDate.getMonth() + 1).toString().padStart(2, '0')}/${birthDate.getFullYear()}`;

    let newEmployee = new Employee(legajo, name, lastName, birth, position)

    employeesList.push(newEmployee);
}

function showEmployees(){
    let data = '';
    for(let employee of employeesList){
        data +=`Legajo: ${employee.legajo}, name: ${employee.name}, lastName: ${employee.lastName}, birth: ${employee.birth}, position: ${employee.position} \n`;
        }        
    document.getElementById('employeesData').textContent = data;
}

