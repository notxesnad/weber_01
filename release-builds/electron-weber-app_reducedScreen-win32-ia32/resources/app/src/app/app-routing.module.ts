import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { ExploreComponent } from './explore/explore.component';
import { CultureComponent } from './culture/culture.component';
import { EconomyComponent } from './economy/economy.component';
import { NaturalComponent } from './natural/natural.component';
import { ImageCompare3Component } from './image-compare3/image-compare3.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'timeline2', component: Timeline2Component },
  { path: 'explore', component: ExploreComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'economy', component: EconomyComponent },
  { path: 'natural', component: NaturalComponent },
  { path: 'image-compare3', component: ImageCompare3Component },
  { path: 'carousel', component: CarouselComponent },
  { path: 'test/:id', component: TestComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
