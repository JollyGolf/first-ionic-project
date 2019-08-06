import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendIdHotelService } from '../send-id-hotel.service';
import { Location } from '@angular/common';  

import { hotels, IHotel } from '../shared/hotel';
import { cells, ICell } from '../shared/cells';

@Component({
  selector: 'app-current-hotel',
  templateUrl: './current-hotel.page.html',
  styleUrls: ['./current-hotel.page.scss'],
})
export class CurrentHotelPage implements OnInit {
  hotel: IHotel;
  enumCells: ICell[];
  hotels: IHotel[] = hotels;
  cells: ICell[] = cells;

  constructor(private router: Router, private data: SendIdHotelService, private location: Location) { }

  ngOnInit() {
  	this.data.currentIdHotel.subscribe(id => {
  	  (id === 0) ? this.router.navigate(['/home']) : null;
  	  this.hotel = this.hotels[id-1];
  	  this.enumCells = cells.filter(cell => cell.idHotel === id);
    });
  }

  openCell(cell: ICell) {
  	//console.log(cell.id, this.hotel.id);
  	this.data.changeIdCell(cell.id);
  	this.router.navigate(['/info-cell']);
  }
  goBack() {
	this.location.back();
  }
}
