let manager = {

     work: 'lead team',
};

let employee = {

    work: 'website develop',
};

let client = {

    work: 'repoting'
};

// level 1 inheritance
manager.__proto__ = employee;

//level 2 inheritance
manager.__proto__.__proto__ = client;

console.log(manager.work);
console.log(manager.__proto__.__proto__.work);
console.log(employee.__proto__);
console.log(client.__proto__.work);