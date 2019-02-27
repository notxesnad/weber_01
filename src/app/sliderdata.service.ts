import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Sliderdata } from './classes';
import { SLIDERDATA } from './content/transportation-data';

@Injectable({
  providedIn: 'root'
})

export class SliderdataService {

  constructor() { }

  getSliderdata(): Observable<Sliderdata[]> {
  	return of(SLIDERDATA);
  }
}
