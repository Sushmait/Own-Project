import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent  {

'controlNumber'=100;
ControlType=""

  constructor() {
    this.control();}

  control(){switch (this.controlNumber)
    {case 100:{
      this.ControlType ="radio";}
  break;

  case 200:{this.ControlType="checkbox"}
  break;}
}
  
   
 CourseName="Angular";
 CountryName="India"
 CityName="Bengaluru"
 newspapername(){return "Indian express"}


 Universityname="University of Cambridge"
 Location="Mysore";

 Fired(){
    console.log("Successfully Completed the task & Happy clicking");


  console.log("Happy Deepavali");
}}