export default function getStudentIdsSum(listofstudents) {
  return listofstudents.reduce((acc, elem) => acc + elem.id, 0);
}
