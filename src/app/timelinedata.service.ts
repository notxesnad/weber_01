import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Timelinedata } from './timelinedata';
import { TIMELINEDATA } from './mock-timelinedata';

@Injectable({
  providedIn: 'root'
})

export class TimelinedataService {

  constructor() { }

  getTimelinedata(): Observable<Timelinedata[]> {
  	return of(TIMELINEDATA);
  }
}
