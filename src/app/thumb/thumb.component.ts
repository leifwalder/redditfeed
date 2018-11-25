import { Component, Input } from '@angular/core';
import { FeedChild, FeedService } from '../feed.service';

@Component({
  selector: 'thumb',
  templateUrl: './thumb.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class ThumbComponent  {

  private fallbackImage: string = "https://i2.wp.com/www.allaboutlean.com/wp-content/uploads/2018/10/Reddit-Logo-NOTEXT-2.png";

  @Input() entry: FeedChild;

  constructor(private feedService: FeedService) {
    //console.log("Thumb component", this);
  }

  private imageSrc(): string {
    return (this.entry.thumbnail && this.entry.thumbnail !== "self") ? this.entry.thumbnail : this.fallbackImage;
  }

  toReadableDate(unixEpochTime) : string {
    return new Date(unixEpochTime * 1000).toLocaleDateString();
  }

}
