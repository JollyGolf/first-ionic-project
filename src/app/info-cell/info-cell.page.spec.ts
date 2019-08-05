import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCellPage } from './info-cell.page';

describe('InfoCellPage', () => {
  let component: InfoCellPage;
  let fixture: ComponentFixture<InfoCellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
