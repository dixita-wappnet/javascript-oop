class Employee
{
    constructor(name =  string)
    {
        this.employeeName = name
    }
 
    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
 
    private convertToString(num = number) {
        return num.toString()
    }
}
 
let employee = new Employee('Ossama')
 
employee.convertToString(20)