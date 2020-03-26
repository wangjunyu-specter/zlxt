import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtitleComponent } from './imgtitle.component';

describe('ImgtitleComponent', () => {
  let component: ImgtitleComponent;
  let fixture: ComponentFixture<ImgtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
