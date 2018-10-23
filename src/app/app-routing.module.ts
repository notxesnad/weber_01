import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'timeline2', component: Timeline2Component },
  { path: 'explore', component: ExploreComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
