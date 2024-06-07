class Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [anyAttr: string]: any;
  
  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience !== undefined) {
        this.yearsOfExperience = yearsOfExperience;
    }
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher("John", "Doe"))

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface Student {
 workOnHomework(): string;
 displayName(): string;
}

class StudentClass implements Student {
  private firstName: string;
  private lastName: string;

  constructor({firstName, lastName}: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return `Currently working`
  }
  
  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student1.workOnHomework());
console.log(student1.displayName());
