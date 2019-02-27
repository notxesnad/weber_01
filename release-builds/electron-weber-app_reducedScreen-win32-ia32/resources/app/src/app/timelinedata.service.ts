import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Timelinedata } from './classes';
import { TIMELINEDATA } from './content/mock-timelinedata';

@Injectable({
  providedIn: 'root'
})

export class TimelinedataService {

  constructor() { }

  getTimelinedata(): Observable<Timelinedata[]> {
  	return of(TIMELINEDATA);
  }
}
