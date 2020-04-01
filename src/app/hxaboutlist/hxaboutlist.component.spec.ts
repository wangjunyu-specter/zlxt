import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HxaboutlistComponent } from './hxaboutlist.component';

describe('HxaboutlistComponent', () => {
  let component: HxaboutlistComponent;
  let fixture: ComponentFixture<HxaboutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HxaboutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HxaboutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
