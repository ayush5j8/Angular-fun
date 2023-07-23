import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title:string="EEna Meena Dika ram pam posh ram pam posh";
  intNum:number=12345678;
  decNumber:number=12.56789;
  currDate:Date=new Date()
  obj:Object={id:1,value:'machika'};
  perc:number=0.289789;
  myArray:string[]=['Ming','hing','ding','Dong'];
}
