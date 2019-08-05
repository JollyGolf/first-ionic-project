import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendIdHotelService } from '../send-id-hotel.service';

import { hotels, IHotel } from '../shared/hotel';
import { cells, ICell } from '../shared/cells';

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
  hotel: IHotelp[];
  hotels: IHotel[] = hotels;
  cells: ICell[] = cells;

  userValue: number = userValue;
  userAvailable: boolean = false;

  constructor(private router: Router, private data: SendIdHotelService) { }

  ngOnInit() {
  	this.data.currentIdHotel.subscribe(idHotel => {
  	  this.hotel = this.hotels[idHotel-1];
  	})
  	this.data.currentIdCell.subscribe(id => {
  	  (id === 0) ? this.router.navigate(['/home']) : null;
  	  this.currentCell = cells.filter(cell => cell.id === id);
  	  this.cell = this.currentCell.filter(cell => cell.idHotel === this.hotel.id);
  	  //this.cell = this.currentCell.filter(cell => cell.idHotel === this.hotel.id);
    });
  }
  buyCell() {
    this.userValue -= this.cell[0].cost;
    this.userAvailable = true;
    console.log(this.userValue);
  }
}
