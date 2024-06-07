interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Hajar',
  lastName: 'Olivier',
  age: 30,
  location: 'Marrakech'
}

const student2: Student = {
  firstName: 'Sarah',
  lastName: 'Oli',
  age: 24,
  location: 'Marrakech'
}

const studentsList = [student1, student2];
const table: HTMLElement = document.createElement('table');
const tbody: HTMLElement = document.createElement('tbody');

table.appendChild(tbody);
tbody.appendChild(table);

studentsList.forEach((student) => {
  const row: HTMLElement = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  tbody.appendChild(row);
});


