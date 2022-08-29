import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { Observable, ReplaySubject, Subject } from "rxjs";

@Injectable()

export class EmployeeService{

    

    employeeList:any = []
    constructor(private _http:HttpClient){}

    employeeUrl:string = 'api/employeeList';

    getEmpByApi():Observable<any[]>{
        return this._http.get<any[]>(this.employeeUrl)
    }

    
   
   
   

  
}