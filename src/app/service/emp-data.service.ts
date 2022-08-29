import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";


export class EmpDataService implements InMemoryDbService{


    constructor()
    {

    }

    createDb() {
        return {
            employeeList:[
                {Srno:1,Fullname:'Suyog Gopal Vyas',Address:"Gondia",DOB:'08/07/2000',emailid:"suyog@gmail.com",Contact:7789098765},
                {Srno:2,Fullname:'Aman Shiv Sahu',Address:"Bhandara",DOB:'02/03/2000',emailid:"aman@gmail.com",Contact:9373446123},
                {Srno:3,Fullname:'Mitesh Gopal Sakalkar',Address:"Bhuranpur",DOB:'17/06/2000',emailid:"mitesh@gmail.com",Contact:9786750898},
                {Srno:4,Fullname:'Chinmay Prashant Deshkar',Address:"Wardha",DOB:'04/01/2000',emailid:"chinmay@gmail.com",Contact:9876543210},
                {Srno:5,Fullname:'Viplav Nitin Khode',Address:"Pune",DOB:'01/01/2000',emailid:"viplav@gmail.com",Contact:8769045632},
                {Srno:6,Fullname:'Sanket Sanjay Bhageria',Address:"Akola",DOB:'27/12/2000',emailid:"sanket@gmail.com",Contact:8796056498},
            ],

            
        }
    }

   
}