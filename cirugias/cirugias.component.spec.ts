import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiasComponent } from './cirugias.component';

describe('CirugiasComponent', () => {
  let component: CirugiasComponent;
  let fixture: ComponentFixture<CirugiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirugiasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
