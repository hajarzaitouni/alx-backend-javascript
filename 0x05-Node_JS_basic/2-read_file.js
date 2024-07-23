const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    let lines = data.toString().split('\n');

    lines = lines.slice(1, lines.length - 1);
    console.log(`Number of students: ${lines.length}`);

    const fields = {};
    for (const line of lines) {
      const student = line.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
