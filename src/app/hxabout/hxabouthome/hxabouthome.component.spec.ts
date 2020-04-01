import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HxabouthomeComponent } from './hxabouthome.component';

describe('HxabouthomeComponent', () => {
  let component: HxabouthomeComponent;
  let fixture: ComponentFixture<HxabouthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HxabouthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HxabouthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
