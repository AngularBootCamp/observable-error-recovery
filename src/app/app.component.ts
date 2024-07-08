import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee, EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  template: `
    <h3>Employees</h3>
    @if (employees | async; as employeeList) {
      <ul>
        @for (e of employeeList; track e) {
          <li>{{ e.firstName }} {{ e.lastName }}</li>
        }
      </ul>
    }
  `,
  standalone: true,
  imports: [AsyncPipe]
})
export class AppComponent {
  employees: Observable<Employee[] | undefined>;

  constructor(es: EmployeesService) {
    this.employees = es.pollEmployees();
  }
}
