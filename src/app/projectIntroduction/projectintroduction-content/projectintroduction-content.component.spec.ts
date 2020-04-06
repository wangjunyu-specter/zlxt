import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectintroductionContentComponent } from './projectintroduction-content.component';

describe('ProjectintroductionContentComponent', () => {
  let component: ProjectintroductionContentComponent;
  let fixture: ComponentFixture<ProjectintroductionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectintroductionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectintroductionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
