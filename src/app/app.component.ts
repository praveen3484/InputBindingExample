import { Component, OnInit } from '@angular/core';
import { Child } from "./customer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
customer : Child;
    custom : Child[]=[
        {Id:1,Name:'Praveen',Email: 'Praveen.ssgk@gmail.com'},
        {Id:2,Name:'Alpit',Email: 'Alpit@gmail.com'},
        {Id:3,Name:'Manisha',Email: 'Manisha@gmail.com'},
        {Id:4,Name:'Mayank',Email: 'Mayank@gmail.com'}
    ];
    logDetails(cust)
    {
        this.customer=cust;
    }



}