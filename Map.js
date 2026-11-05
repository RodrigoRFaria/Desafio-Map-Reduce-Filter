/*const number = [1, 2, 3, 4, 5, 6, 7];

const double = number.map((num) => num * 2);*/

const list = [
    { name: "Alice", vip: true },
    { name: "Bob", vip: false },
    { name: "Charlie", vip: true },
    { name: "David", vip: false},
    { name: "Eve", vip: true },
    { name: "Frank", vip: false },
    { name: "Grace", vip: true },
    { name: "Heidi", vip: false },

];

const newList = list.map(user => { 
    let braceletColor 

    if (braceletColor === true) {
        braceletColor = "Black";
    } else {
        braceletColor = "green";
    }

//            ou

    const newUser = {
        name: user.name,
        braceletColor: user.vip ? "Black" : "green"
    }
    return newUser;
});


console.log(newList);


const students = [
    { name: "Alice", grade: 7 },
    { name: "Bob", grade: 5 },
    { name: "Charlie", grade: 8 },
    { name: "David", grade: 6 },
    { name: "Eve", grade: 9 },
    { name: "Frank", grade: 4 },
    { name: "Grace", grade: 10 },
];

const aprovadoOuReprovado = students.map(student => {
    const schoolSituation = {
        name: student.name,
        status: student.grade >= 5 ? "Aprovado" : "Reprovado"
    }
    return schoolSituation; 
        
    });



console.log(aprovadoOuReprovado);

const newStudents = students.map(student => {
    return {
        name: student.name,
        grade: student.grade,
        status: student.grade >= 5 ? "Aprovado" : "Reprovado"
    }
});

console.log(newStudents);
