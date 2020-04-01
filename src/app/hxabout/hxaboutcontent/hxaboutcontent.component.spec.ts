import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HxaboutcontentComponent } from './hxaboutcontent.component';

describe('HxaboutcontentComponent', () => {
  let component: HxaboutcontentComponent;
  let fixture: ComponentFixture<HxaboutcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HxaboutcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HxaboutcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
