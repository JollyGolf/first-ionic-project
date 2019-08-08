import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ID } from './shared/empty.ID';

@Injectable({
  providedIn: 'root'
})
export class SendIdHotelService {

  private idHotelSource = new BehaviorSubject<any>(ID);
  private idCellSource = new BehaviorSubject<any>(ID);
  private idUserSource = new BehaviorSubject<any>(ID);

  currentIdHotel = this.idHotelSource.asObservable();
  currentIdCell = this.idCellSource.asObservable();
  currentIdUser = this.idUserSource.asObservable();

  constructor() { }

  changeIdHotel(id: any) {
  	this.idHotelSource.next(id);
  }
  changeIdCell(id: any) {
  	this.idCellSource.next(id);
  }
  changeIdUser(id: any) {
    console.log(id);
    this.idUserSource.next(id);
  }
}
