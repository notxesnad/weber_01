import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['./timeline2.component.css']
})
export class Timeline2Component implements OnInit {

  constructor(
	  private route: ActivatedRoute,
	  private location: Location
	) {}

  ngOnInit(): void {  

  	const id = +this.route.snapshot.paramMap.get('id');
  	alert("ID IS: " + id);

  }

}
