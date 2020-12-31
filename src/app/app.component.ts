import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 0;
  vacant=0;
  seats:number[]=[];

  ngOnInit(){
    for(var i=1;i<=80;i++){
      this.seats.push(i);
    }
  }

  onSeat($event){
    this.name = $event.target.value;
    this.vacant = 60- this.name;
   

  }
}

