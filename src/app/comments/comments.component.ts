import { Component, Input } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class CommentsComponent  {

  @Input() comments: any

  constructor(){
    console.log("comments invoked")
  }

  ngOnInit(){
    console.log("comments ", this.comments);
  }


  toArray
}
