import { Component, Input } from '@angular/core';
import { FeedService, FeedData } from '../feed.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class SettingsComponent  {

  private topic : string;
  private limit : string;
  private isChecked : boolean = true;

  constructor(private feedService: FeedService) {
    this.topic = feedService.getTopic();
    this.limit = feedService.getLimit().toString();
  }

  private handleTopicChange(value) {
    if (value && this.topic !== value) {
      this.topic = value;
      this.feedService.changeTopic(this.topic);
    }
  }

  private handleLimitChange(value) {
    if (value && value !== this.feedService.getLimit().toString()) {
      this.feedService.changeLimit(value);
    }
  }

}
