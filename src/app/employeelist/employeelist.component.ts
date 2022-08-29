import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private _empService:EmployeeService) { }

  employeeList:any = []
  displayedColumns = ['Srno','Fullname','Address','DOB','emailid','Contact']

  ngOnInit(): void {

    this._empService.getEmpByApi().subscribe((data)=>{
      this.employeeList = data
    })
  }

}
