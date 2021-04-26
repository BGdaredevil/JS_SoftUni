class Company {
  constructor() {
    this.departments = [];
  }

  addEmployee(username, salary, position, dep) {
    if (!username || !salary || !position || !dep || salary < 0) {
      throw new Error("Invalid input");
    } else {
      this.departments.push({ username, salary, position, department: dep });
      return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
  }

  bestDepartment() {
    this.departments = this.departments.sort((a, b) =>
      a.department.localeCompare(b.department)
    );

    let result = this.departments.reduce((acc, el) => {
      if (!acc.hasOwnProperty(el.department)) {
        acc[el.department] = {
          sum: 0,
          count: 0,
          department: el.department,
          employees: [],
        };
      }
      acc[el.department].sum += el.salary;
      acc[el.department].count++;
      acc[el.department].employees.push(el);

      return acc;
    }, {});

    let best = Object.values(result)
      .sort((a, b) => b.sum / b.count - a.sum / a.count)
      .shift();

    let row = "";

    row += `Best Department is: ${best.department}\nAverage salary: ${(
      best.sum / best.count
    ).toFixed(2)}\n`;

    let lala = best.employees
      .sort(
        (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
      )
      .map((employee) => {
        return `${employee.username} ${employee.salary} ${employee.position}`;
      })
      .join("\n");
    row += lala;
    return row;
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
