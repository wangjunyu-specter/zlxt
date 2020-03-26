import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingHomeComponent } from './matching-home.component';

describe('MatchingHomeComponent', () => {
  let component: MatchingHomeComponent;
  let fixture: ComponentFixture<MatchingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
