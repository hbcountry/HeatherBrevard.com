import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonSmallComponent } from './nav-button-small.component';

describe('NavButtonSmallComponent', () => {
  let component: NavButtonSmallComponent;
  let fixture: ComponentFixture<NavButtonSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavButtonSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
