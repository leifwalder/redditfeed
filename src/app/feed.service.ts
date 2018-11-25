import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } 
from '@angular/http';

export interface FeedData {
  data : {
    after: string | null; 
    before: string | null;
    children: FeedChild[];
    dist: number;
    modhash: string;
    id: string;
  };
  kind: string;
}

export interface FeedChild {
  author: string;
  created: number;// (as readable date)
  num_comments: number;
  permalink: string //serverrelative (as a link)
  title: string
  score: number;
  selftext: string;
  thumbnail: string; //url for img[src]
  thumbnail_height: number;
  thumbnail_width: number;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeedService  {
  constructor(
    private http: Http) {
      this.getFeed(this.topic, this.limit, this.beforeId, this.afterId);
     }


  public baseUrl = "https://www.reddit.com"

  public page: number = 0;
  public currentFeed: FeedData;
  public entries : FeedChild[];

  private limit: number = 10;

  private beforeId: string;
  private afterId: string;

  // TOPIC
  private topic = "illustration";
  public getTopic (): string {
    return this.topic;
  }
  public changeTopic(newTopic: string) {
    this.topic = newTopic;
    this.clearPaging();
    this.getFeed(this.topic, this.limit, this.beforeId, this.afterId);
  }
  public getLimit (): number {
    return this.limit;
  }
  public changeLimit(newLimit: string) {
    this.limit = Number(newLimit);
    this.clearPaging();
    this.getFeed(this.topic, this.limit, this.beforeId, this.afterId);
  }

  public nextPage() {
    this.page += 1;
    this.clearPaging();
    this.afterId = this.entries[this.entries.length-1].id;
    this.getFeed(this.topic, this.limit, this.beforeId, this.afterId);
  }
  public prevPage() {
    this.page -= 1;
    this.clearPaging();
    this.beforeId = this.entries[0].id;
    this.getFeed(this.topic, this.limit, this.beforeId, this.afterId);
  }

  clearPaging(){
    this.beforeId = "";
    this.afterId = "";
  }

  //example https://www.reddit.com/r/illustration.json
  public getFeed(topic: string, limit: number, beforeId: string, afterId: string): void {

    const beforeParam: string = beforeId ? `&before=t3_${beforeId}` : '';
    const afterParam: string = afterId ? `&after=t3_${afterId}` : '';

    this.http.get(`https://www.reddit.com/r/${topic}.json?limit=${limit}${beforeParam}${afterParam}`)
      .subscribe((res: Response) => {
        const asJson = res.json();
        this.currentFeed = res.json();
        this.entries = asJson.data.children.map(rawEntry => rawEntry.data);
      }, error => {
        console.log(error);
      });
  }

  private comments:[] = [];

  public resetComments(){
    this.comments = [];
  }

  public getComments(topic: string, id: string): void {

    this.http.get(`${this.baseUrl}/r/${topic}/comments/${id}.json?`)
      .subscribe((res: Response) => {
        const asJson = res.json();

        let comments: [];
        const hasComments = (asJson[1].data.children.length > 0)
        if (hasComments) {
          comments = asJson[1].data.children;
        }
        this.comments = comments

      }, error => {
        console.log(error);
      });
  }

}

export interface Comment {
  body: string;
  replies?: Comment[]
}
