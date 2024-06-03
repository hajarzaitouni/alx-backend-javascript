export default function getListStudentIds(listofstudents) {
  if (Array.isArray(listofstudents)) {
    return listofstudents.map((elem) => elem.id);
  }
  return [];
}
