export default function createEmployeesObject(departmentName, employees) {
  const employeobject = {
    [`${departmentName}`]: [...employees],
  };

  return employeobject;
}
