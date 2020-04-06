import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcdComponent } from './aboutcd.component';

describe('AboutcdComponent', () => {
  let component: AboutcdComponent;
  let fixture: ComponentFixture<AboutcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
