import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';



import { SettingsComponent } from './settings/settings.component';
import { PagingComponent } from './paging/paging.component';
import { ThumbComponent } from './thumb/thumb.component';
import { PageComponent } from './page/page.component';
import { CommentsComponent } from './comments/comments.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, SettingsComponent, PagingComponent, PageComponent, ThumbComponent, CommentsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  constructor(router: Router){}

}
