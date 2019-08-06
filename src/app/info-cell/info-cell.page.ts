import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendIdHotelService } from '../send-id-hotel.service';
import { Location } from '@angular/common';  

import { hotels, IHotel } from '../shared/hotel';
import { cells, ICell } from '../shared/cells';

const userId: number = 1;
const userValue: number = 75;

@Component({
  selector: 'app-info-cell',
  templateUrl: './info-cell.page.html',
  styleUrls: ['./info-cell.page.scss'],
})
export class InfoCellPage implements OnInit {
  currentHotel: IHotel;
  currentCell: ICell[];
  cell: ICell[];
  hotel: IHotel[];
  cells: ICell[] = cells;
  hotels: IHotel[] = hotels;
  

  userId: number = userId;
  userValue: number = userValue;

  userAvailable: number = 0;

  constructor(private router: Router, private data: SendIdHotelService, private location: Location) { }

  ngOnInit() {
  	this.data.currentIdHotel.subscribe(idHotel => {
  	  this.hotel = this.hotels[idHotel-1];
  	})
  	this.data.currentIdCell.subscribe(id => {
  	  (id === 0) ? this.router.navigate(['/home']) : null;
  	  this.currentCell = cells.filter(cell => cell.id === id);
  	  this.cell = this.currentCell.filter(cell => cell.idHotel === this.hotel.id);
    });
  }
  buyCell() {
    this.userValue -= this.cell[0].cost;
    this.cell[0].available = this.userId;
    console.log(this.userValue);
  }
  goBack() {
	this.location.back();
  }
}
