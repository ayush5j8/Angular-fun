import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  // title!:string;
  // details!:string;
  // imgUrl!:string;
  // links!:string;
  // isChecked!:boolean;
  name!:string;
  email!:string;
  address!:string;
  myArray:any[]=[];

  onSave(){
    this.myArray.push(
      {
        "Name":this.name,
        "Email":this.email,
        "Address":this.address
      }
    );
  }
  onDelete(i:number){
    this.myArray.splice(i,1);
  }
}
