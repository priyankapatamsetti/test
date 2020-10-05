import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  // currentDate: any = new Date();
 // day = this.currentDate.getDate();
  month = this.currentDate.getMonth() ;
  year = this.currentDate.getFullYear();



  countDownDate = new Date(this.year, this.month+1, 0);
  todaysdate = new Date();
  difference =this.countDownDate.getDate() - this.todaysdate.getDate();

  weekDaysArray = ['', 'Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday',];
  day = this.weekDaysArray[this.currentDate.getDay()];
  monthsArray = ['January', 'February', 'March','April','May','June','July', 'August','September','October','November','December',];
  monthName = this.monthsArray[this.currentDate.getMonth()];


  

}
