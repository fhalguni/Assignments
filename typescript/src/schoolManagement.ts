class Person {
  public name: string | undefined;
  public age: number | undefined;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old`);
  }
}

class Student extends Person {
  readonly studentId: number;
  public grade: string | undefined;
  private static studentCount: number = 0;

  constructor(name: string, age: number, studentId: number, grade: string) {
    super(name, age);
    this.studentId = studentId;
    this.grade = grade;
    Student.studentCount++;
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name}, a student in grade ${this.grade}`);
  }

  static getTotalStudents(): number {
    return Student.studentCount;
  }
}

class Teacher extends Person {
  readonly teacherId: number;
  subject?: string;
  private static teacherCount: number = 0;

  constructor(name: string, age: number, teacherId: number, subject: string) {
    super(name, age);
    this.teacherId = teacherId;
    this.subject = subject;
    Teacher.teacherCount++;
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name}, and I teach ${this.subject}`);
  }

  static getTotalTeachers(): number {
    return Teacher.teacherCount;
  }
}

abstract class Staff {
  public department: string | undefined;
  protected salary: number | undefined;
  constructor(department: string, salary: number) {
    this.department = department;
  }
  abstract workDetails(): void;
}

class Clerk extends Staff {
  public responsibility: string | undefined;
  constructor(department: string, salary: number, responsibility: string) {
    super(department, salary);
    this.salary = salary;
    this.responsibility = responsibility;
  }

  workDetails(): void {
    console.log(
      `I am in ${this.department} department, and my responsibility is ${this.responsibility} and salary ${this.salary}`
    );
  }
}

let student = new Student("student1", 23, 1, "A");
let student1 = new Student("student2", 234, 2, "B");

student.introduce();
student1.introduce();
console.log("Number of students are: " + Student.getTotalStudents());

let teacher = new Teacher("Ashwini", 22, 1, "physics");

teacher.introduce();
console.log("Number of teachers are: " + Teacher.getTotalTeachers());

let clerk = new Clerk("IT", 10000, "Managing Attendance record");
clerk.workDetails();
