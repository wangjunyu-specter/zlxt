import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceListComponent } from './introduce-list.component';

describe('IntroduceListComponent', () => {
  let component: IntroduceListComponent;
  let fixture: ComponentFixture<IntroduceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
