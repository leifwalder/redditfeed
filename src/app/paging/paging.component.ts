import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FeedService, FeedData, FeedChild } from '../feed.service';
import { Router } from "@angular/router";

@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class PagingComponent  {

  constructor(
    private feedService: FeedService, 
    private route: Router
  ) {}

  navigateToPage(event, index : number) {
    console.log("click event", event)
    const anchorWasClicked = (event.path[0] && event.path[0].href);
    if (!anchorWasClicked) {
      this.route.navigate(['page', index]);
    }
  }

  nextPage(){
    this.feedService.nextPage();
  }
  prevPage(){
    this.feedService.prevPage();
  }


}
