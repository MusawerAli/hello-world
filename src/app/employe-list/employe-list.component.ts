import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {


  public employees = [
    {'id':1,"name":"musawer","age":22},
    {'id':2,"name":"ali","age":25},
    {'id':1,"name":"alao","age":24}
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
