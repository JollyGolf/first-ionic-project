import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCellPage } from './current-cell.page';

describe('CurrentCellPage', () => {
  let component: CurrentCellPage;
  let fixture: ComponentFixture<CurrentCellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
