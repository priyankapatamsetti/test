import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {


  currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  // currentDate: any = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() ;
  year = this.currentDate.getFullYear();
  constructor() { }

  ngOnInit() { }

  countDownDate = new Date(this.year, this.month+1, 0);
  todaysdate = new Date();
  totalDaysLeft =this.countDownDate.getDate() - this.todaysdate.getDate();

   // difference = this.countDownDate - todaysdate;
  // x = setInterval(() => {
  //   var todaysdate = new Date().getTime();
  //   var difference = countDownDate - todaysdate;
  //   var days = Math.floor(difference / (1000 * 60 * 60* 24));
  //   var hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 )));
  //   var minutes = Math.floor((difference % (1000 * 60 * 60 ) / (1000 * 60 )));
  //   var seconds = Math.floor((difference) % (1000 * 60 ) / 1000);

  //   this.test = days + "days left";

  // });

}