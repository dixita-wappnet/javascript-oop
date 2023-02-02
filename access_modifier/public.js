class Employee
{
 
    constructor(name = string)
    {
        this.employeeName = name
    }
 
    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
 
}
 
let employee = new Employee('Ossama')
 
employee.greet()