import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-customer-list',
  template: `
    <div *ngFor="let customers of customerList">
    <li>{{customers.name}}</li>
    </div>
  `,
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customerList = [];
  constructor(private _customerList:EmployeeService) { }

  ngOnInit() {
    
    this._customerList.getEmployees()
    .subscribe(data => this.customerList = data);
  }

}
