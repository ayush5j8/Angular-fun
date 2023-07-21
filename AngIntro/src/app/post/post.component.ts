import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
title:string="List of posts"
@Input() fromParent:string='';
}
