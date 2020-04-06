import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HxaboutComponent } from './hxabout.component';

describe('HxaboutComponent', () => {
  let component: HxaboutComponent;
  let fixture: ComponentFixture<HxaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HxaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HxaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
