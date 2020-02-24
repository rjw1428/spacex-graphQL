import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketPopupComponent } from './rocket-popup.component';

describe('RocketPopupComponent', () => {
  let component: RocketPopupComponent;
  let fixture: ComponentFixture<RocketPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
