import { Component, OnInit } from '@angular/core';


import { Sliderdata } from '../classes';
import { SLIDERDATA } from '../content/culture-data';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})

export class CultureComponent implements OnInit {

	sectionTitle = 'culture';
	
  slides = SLIDERDATA;

  constructor( ) { }

  ngOnInit() {

  }

} 