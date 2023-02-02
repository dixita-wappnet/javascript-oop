class Employee
{
    public employeeName: string
 
    constructor(name: string)
    {
        this.employeeName = name
    }
 
    protected greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}