import { WorldVectorMapComponent } from '@/app/component/vector-maps/world-vector-map.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'

@Component({
  selector: 'dashboard-session',
  standalone: true,
  imports: [WorldVectorMapComponent, NgbDropdownModule],
  templateUrl: './session.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SessionComponent {
  worldMapConfig = {
    map: 'world',
    selector: '#world-map-markers',
    zoomOnScroll: false,
    zoomButtons: true,
    markersSelectable: true,
    markers: [
      { name: 'Greenland', coords: [72, -42] },
      { name: 'Canada', coords: [56.1304, -106.3468] },
      { name: 'Brazil', coords: [-14.235, -51.9253] },
      { name: 'Egypt', coords: [26.8206, 30.8025] },
      { name: 'Russia', coords: [61, 105] },
      { name: 'China', coords: [35.8617, 104.1954] },
      { name: 'United States', coords: [37.0902, -95.7129] },
      { name: 'Norway', coords: [60.472024, 8.468946] },
      { name: 'Ukraine', coords: [48.379433, 31.16558] },
    ],
    markerStyle: {
      initial: { fill: '#5B8DEC' },
      selected: { fill: '#ef5f5f' },
    },
    labels: {
      markers: {
        render: (marker: any) => marker.name,
      },
    },
    regionStyle: {
      initial: {
        fill: 'rgba(169,183,197, 0.2)',
        fillOpacity: 1,
      },
    },
  }
}
