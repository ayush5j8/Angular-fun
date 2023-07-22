import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  myArray:string[]=['hi','hello','Bye']
  objArray:any[]=[
    {id:1,name:'Mukesh'},
    {id:2,name:'Rakesh'}
  ]

  addNew(){
    this.myArray.push('bingo')
  }
  delItem(i:number){
    this.myArray.splice(i,1)
  }
}
