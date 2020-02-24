var add = function (x, y) {
  return x + y;
}

const add = (x, y) => x + y;



const students = [
  {name: 'Anna', grade: 6}, 
  {name: 'John', grade: 4}, 
  {name: 'Maria', grade: 9}]

  //map
  const byName = object => object.name;
  const studentsByName = students.map(byName);
  
  //filter
  const isApproved = student => student.grade >= 9;
  const approvedStudents = students.filter(isApproved);

  //reduce
  const sum = students.reduce((acc, current) => acc + current.grade, 0);