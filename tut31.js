class Employee {
    constructor(givenname,givenexperience,givendivision){ 
        this.name = givenname;
        this.experience = givenexperience;
        this.division = givendivision;
    }
   slogan () {
    return `this company is best regards ${this.name}`;
   }
}


class Programmer extends Employee {
    constructor(givenname,givenexperience,givendivision,language){
        super(givenname,givenexperience,givendivision);
         this.language = language;
    }
}

harry = new Employee("harry", 20, "division");
mohaseena = new Employee("mohaseena", 4, "division");
lalita = new Programmer("lalita", 20, "Division", "Javascript")
console.log(lalita);