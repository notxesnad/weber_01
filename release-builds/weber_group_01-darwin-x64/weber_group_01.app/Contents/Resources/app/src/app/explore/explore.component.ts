import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sliderdata } from '../classes';
import { SliderdataService } from '../sliderdata.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})

export class ExploreComponent implements OnInit {
	
	sectionTitle = 'transporation';
	
  slides: Sliderdata[] = [];

  constructor(

		private sliderdataService: SliderdataService,
		private route: ActivatedRoute,
		private location: Location

	) { }

  ngOnInit() {
  	this.getSliderData();
  }

  getSliderData(): void {
  	this.sliderdataService.getSliderdata()
  	.subscribe(slides => this.slides = slides);
  }

}