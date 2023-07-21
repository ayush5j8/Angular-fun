import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() fromParent:string='';
  message:string='postlist-to-post';
  @Output() messageEvent=new EventEmitter<string>();
  flag:boolean=false;
  imgUrl:string='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  sendMessage(){
    console.log('emitted')
    this.messageEvent.emit(this.message);
    
  }
  buttonClick(){
    console.log("bamabzoo")
  }
}
