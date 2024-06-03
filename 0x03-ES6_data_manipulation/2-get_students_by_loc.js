export default function getStudentsByLocation(listofstudents, city) {
  return listofstudents.filter((elem) => elem.location === city);
}
