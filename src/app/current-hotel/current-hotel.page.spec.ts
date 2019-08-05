import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHotelPage } from './current-hotel.page';

describe('CurrentHotelPage', () => {
  let component: CurrentHotelPage;
  let fixture: ComponentFixture<CurrentHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentHotelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
