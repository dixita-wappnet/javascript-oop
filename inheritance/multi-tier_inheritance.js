
//  create a subject object 

let subject = {

    topic : "javascript",
    about : function()
    {
        return "JS is amazing" + student1.id1;
    },
};

// create a course object

let course = {

    instructor : "profrssor",
};


// create a department object

let department = {

    dept_name : "Computer Science Engineering",
};

// create a student1 object

let student1= {

    id : 50,
    getDetails() {
        return `your ID is ${student1.id}.\nYour instructor is ${student1.instructor}. Your Topic is ${student1.topic}. and Your Department is ${student1.dept_name}`
    }
}; 

// create a student1 object
let student2 = {

    id2 : 2,
    getDetails() {
        return `your ID is ${student2.id2}.\nYour instructor is ${student2.instructor}. Your Topic is ${student2.topic}. and Your Department is ${student2.dept_name}`
    }
}; 

//inherited object with other object

course.__proto__ = subject;
department.__proto__ = course;

student1.__proto__ = department;
student2.__proto__ = department;

// print 

console.log(student1.dept_name);
console.log("---------------------");

console.log(student1.getDetails() + "\n");
console.log("---------------------");
console.log(student2.getDetails());

