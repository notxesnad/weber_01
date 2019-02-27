import { Component, OnInit } from '@angular/core';

import { Sliderdata } from '../classes';
import { SLIDERDATA } from '../content/economy-data';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.css']
})

export class EconomyComponent implements OnInit {

	sectionTitle = 'economy';
	
  slides = SLIDERDATA;

  constructor( ) { }

  ngOnInit() {

  }

} 