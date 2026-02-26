import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-viewroute',
  imports: [CommonModule],
  templateUrl: './viewroute.html',
  styleUrl: './viewroute.css',
})
export class Viewroute {

  constructor(private route: ActivatedRoute) {}

  routeData: any;

  ngOnInit() {
    this.routeData = history.state.routeData;

    console.log('Received Data:', this.routeData);
  }
}
