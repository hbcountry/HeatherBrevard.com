import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavButtonLargeComponent } from './nav-button-large/nav-button-large.component';
import { NavButtonMediumComponent } from './nav-button-medium/nav-button-medium.component';
import { NavButtonSmallComponent } from './nav-button-small/nav-button-small.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { NavComponent } from './nav/nav.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavButtonLargeComponent,
    NavButtonMediumComponent,
    NavButtonSmallComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventsComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [HttpClientModule, EmbedVideo.forRoot()],
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
