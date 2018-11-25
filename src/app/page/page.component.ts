import { Component, Input } from '@angular/core';
import { FeedService, FeedChild } from '../feed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class PageComponent  {

  private entry: FeedChild;

  id: number;

  constructor(
    private route: ActivatedRoute, 
    private feedService: FeedService,
    private router: Router) {
    if (!feedService.entries) {
      router.navigate(['paging']);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.feedService.entries[this.id]) {
        this.entry = this.feedService.entries[this.id]
        this.feedService.resetComments();
        this.feedService.getComments(
          this.feedService.getTopic(),
          this.entry.id);
      }
    });
  }

  toReadableDate(unixEpochTime) : string {
    return new Date(unixEpochTime * 1000).toLocaleDateString();
  }

}
