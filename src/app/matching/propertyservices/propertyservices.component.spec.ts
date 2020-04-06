import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyservicesComponent } from './propertyservices.component';

describe('PropertyservicesComponent', () => {
  let component: PropertyservicesComponent;
  let fixture: ComponentFixture<PropertyservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
