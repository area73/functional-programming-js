
var valid = false;
var elem = document.querySelector('#student-ssn');
/*
elem.onkeyup = function (event) {
	var val = elem.value;
	if(val !== null && val.length !== 0) {
		val = val.replace(/^\s*|\s*$|\-/g, '');
		if(val.length === 9) {
			console.log(`Valid SSN: ${val}!`);
			valid = true;
		}
	}
	else {
		console.log(`Invalid SSN: ${val}!`);
	}
};
*/

elem.onkeyup =  (event) => {
	return a;
}

const enrollment = [
    {enrolled: 2 , grade:100},
    {enrolled: 2 , grade:80},
    {enrolled: 1 , grade:89}
]


// const res = average(sumGrades(greaterThanOne(enrollment)));

const greaterThanOne = enroll => enroll.filter(item => item.enrolled > 1);
const sumGrades = enroll => enroll.reduce((total, curr) => curr.grade + total , 0);
const countStudents = enroll => enroll.reduce((total, curr) => curr.enrolled + total , 0);
const average = enroll => sumGrades(enroll) / countStudents(enroll);



console.log(greaterThanOne(enrollment));
console.log(sumGrades(enrollment));
console.log(countStudents(enrollment));
console.log(average(enrollment));

const resultConcat = sumGrades(greaterThanOne(enroll));
