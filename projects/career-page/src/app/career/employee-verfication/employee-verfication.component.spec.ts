import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVerficationComponent } from './employee-verfication.component';

describe('EmployeeVerficationComponent', () => {
  let component: EmployeeVerficationComponent;
  let fixture: ComponentFixture<EmployeeVerficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeVerficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeVerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
