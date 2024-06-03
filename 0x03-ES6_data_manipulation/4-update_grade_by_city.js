export default function updateStudentGradeByCity(listofstudents, city, newGrades) {
  return listofstudents
    .filter((elem) => elem.location === city)
    .map((elem) => {
      const [newGrade] = newGrades.filter((item) => item.studentId === elem.id);
      return {
        ...elem,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
