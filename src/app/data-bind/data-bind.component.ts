import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent {
  [x: string]: any;

  'controlNumber' = 100;
  'ControlType' = "text"
  constructor() {
    //!this.control();//
  }
  control() {
    switch (this.controlNumber) {
      case 100: {
        this.ControlType = "radio";
      }
        break;

      case 200: { this.ControlType = "checkbox" }
        break;
      default: {
        this.ControlType = "text"
      }
    }
  }
  CourseName = "Angular";
  CountryName = "India"
  CityName = "Bengaluru"
  newspapername() { return "Indian express" }
  Universityname = "University of Cambridge"
  Location = "Mysore";

  Fired() {
    console.log("Successfully Completed the task & Happy clicking");
    console.log("Happy Deepavali");

    '"evtControlCheck()"'
    this.control();
  }

  //customerName="Sushma;"//
  //updatedCustomerName(){//
  //this.customerName="Sushma DS";//
  // console.log(this.customerName);}}//

  Name = "Angular Course Training"
  ShowMessage(message: HTMLInputElement) {
    console.log(message.value)
    console.log("showing property DB & Event DB together")
  }

  Skill = "Key Details abt the Event"
  evtmessage(evtDetails: any) {
    console.log(evtDetails);
  }

  Role = "Deputy Manager"
  evtRole(Updatedrecords: any) {
    console.log(Updatedrecords)
    this.Role = Updatedrecords
  }
//console.log("triggering the event through ngModel");

MicrosoftOwnedby = "Bill Gates"
}

