console.log("tut 27");

const car = {
    name: "Beng",
    design: "classy",
    run: function(){
        return "running"
    }
}


// creating constructor

function Generalcar(givenName, givenSpeed) {
    this.name = givenName,
    this.topspeed = givenSpeed
    this.run = function() {
        return(`${this.name} is running `)
    }
    this.speed = function() {
        return(`running slowerthan ${200 - this.topspeed}`)
    }
}

const car1 = new Generalcar("baleno", 200);
const car2 = new Generalcar("benzzz", 180);
console.log(car1, car2);