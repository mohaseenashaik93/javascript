const students = [
    {name: "mohaseena", subject: "Javascript"},
    {name: "lalita", subject: "php"}
]


function enrollStudent(student, callback) {
  setTimeout(()=> {
        students.push(student);
        console.log(students);
        callback();
  }, 1000)     
}

function getStudents() {
    setTimeout(()=> {
        let str;
        students.forEach( (e) => {
            str += `<li>${e.name}</li>`
        });
        document.getElementById('studentid').innerHTML = str;
  }, 100)  
}

let newstudent = {name: 'deepu', subject:'python'}

enrollStudent(newstudent, getStudents);
