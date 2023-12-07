document
    .querySelector('form')
    .addEventListener('submit', setGrade)

let grades =[];

function setGrade(e) {
    e.preventDefault();
    let grade = parseFloat(document.querySelector('#grade').value)
    grades.push(grade);
    let name = document.querySelector('#Name').value
    grades.push({grade, name});
    console.log(grade);
    printGrades();
} 


function printGrades() //does not need to get any data in order to work
{
let o = document.querySelector('#output');
let sum=0;
for (let i=0; i<grades.length; i++) {
    sum += grades [i].grade;
}
let avg= sum/grades.length;
o.innerText =avg;


}
