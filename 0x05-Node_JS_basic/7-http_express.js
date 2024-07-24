const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      let lines = data.split('\n');
      lines = lines.slice(1).filter((line) => line.trim() !== '');

      const fields = {};
      for (const line of lines) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }

      let output = `Number of students: ${lines.length}\n`;
      for (const [key, value] of Object.entries(fields)) {
        output += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const output = await countStudents(process.argv[2]);
    res.end(output);
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(port);
module.exports = app;
