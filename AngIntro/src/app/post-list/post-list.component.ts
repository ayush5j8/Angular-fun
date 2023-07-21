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

  sendMessage(){
    console.log('emitted')
    this.messageEvent.emit(this.message);
    
  }
}
