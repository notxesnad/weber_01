import { Component, OnInit } from '@angular/core';

import { Sliderdata } from '../classes';
import { SLIDERDATA } from '../content/natural-data';

@Component({
  selector: 'app-natural',
  templateUrl: './natural.component.html',
  styleUrls: ['./natural.component.css']
})
export class NaturalComponent implements OnInit {

	sectionTitle = 'Natural History';
	
  slides = SLIDERDATA;

  constructor( ) { }

  ngOnInit() {

  }

}
