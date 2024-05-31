export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const val of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...val,
    ];
  }
  return allEmployees;
}
