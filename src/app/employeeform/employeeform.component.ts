import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }
  empForm!: FormGroup;
  ngOnInit(): void {

    this.empForm= this._fb.group({
      
      FirstName:['',[Validators.required]],
      MiddleName:[''],
      LastName:['',[Validators.required]],
      EmailID:['',[Validators.required]],
      Gender:['',Validators.required],
      DOB:['',Validators.required],
      EmployeeType:['',Validators.required],
      Address:['',Validators.required],
      Pincode:['',[Validators.required,Validators.maxLength(6)]],
      ContactNumber:['',[Validators.required,Validators.maxLength(10)]],
      
   })
  }

  submit(){
    
  }

}
