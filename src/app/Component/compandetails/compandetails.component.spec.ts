import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompandetailsComponent } from './compandetails.component';

describe('CompandetailsComponent', () => {
  let component: CompandetailsComponent;
  let fixture: ComponentFixture<CompandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompandetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
