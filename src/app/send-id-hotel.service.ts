import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendIdHotelService {

  private idHotelSource = new BehaviorSubject<string>('0');
  private idCellSource = new BehaviorSubject<number>(0);

  currentIdHotel = this.idHotelSource.asObservable();
  currentIdCell = this.idCellSource.asObservable();

  constructor() { }

  changeIdHotel(id: string) {
  	this.idHotelSource.next(id);
  }
  changeIdCell(id: number) {
  	this.idCellSource.next(id);
  }
}
