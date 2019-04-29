import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonMediumComponent } from './nav-button-medium.component';

describe('NavButtonMediumComponent', () => {
  let component: NavButtonMediumComponent;
  let fixture: ComponentFixture<NavButtonMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavButtonMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
