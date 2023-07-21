import { Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
title:string="List of posts";
toChild:string="jingalala from post to postList";
childMessage:string='';
@Input() fromParent:string='';

receiveMessage($event:string){
  console.log('caught')
  this.childMessage=$event;
  
}

}
