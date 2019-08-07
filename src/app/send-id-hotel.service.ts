import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ID } from './shared/empty.ID';

@Injectable({
  providedIn: 'root'
})
export class SendIdHotelService {

  private idHotelSource = new BehaviorSubject<string>(ID);
  private idCellSource = new BehaviorSubject<string>(ID);
  private idUserSource = new BehaviorSubject<string>(ID);

  currentIdHotel = this.idHotelSource.asObservable();
  currentIdCell = this.idCellSource.asObservable();
  currentIdUser = this.idUserSource.asObservable();

  constructor() { }

  changeIdHotel(id: string) {
  	this.idHotelSource.next(id);
  }
  changeIdCell(id: string) {
  	this.idCellSource.next(id);
  }
  changeIdUser(id: string) {
    console.log(id);
    this.idUserSource.next(id);
  }
}
