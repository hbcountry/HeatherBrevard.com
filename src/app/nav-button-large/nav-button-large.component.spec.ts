import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonLargeComponent } from './nav-button-large.component';

describe('NavButtonLargeComponent', () => {
  let component: NavButtonLargeComponent;
  let fixture: ComponentFixture<NavButtonLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavButtonLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
