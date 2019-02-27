import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimelineComponent } from './timeline/timeline.component';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatGridListModule
} from '@angular/material';
import { ExploreComponent } from './explore/explore.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { ImageCompare3Component } from './image-compare3/image-compare3.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumpCardsComponent } from './jump-cards/jump-cards.component';
import { CultureComponent } from './culture/culture.component';
import { EconomyComponent } from './economy/economy.component';
import { NaturalComponent } from './natural/natural.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimelineComponent,
    ExploreComponent,
    Timeline2Component,
    ImageCompare3Component,
    CarouselComponent,
    JumpCardsComponent,
    CultureComponent,
    EconomyComponent,
    NaturalComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
