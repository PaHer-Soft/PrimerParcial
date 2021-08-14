import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCentralComponent } from './video-central.component';

describe('VideoCentralComponent', () => {
  let component: VideoCentralComponent;
  let fixture: ComponentFixture<VideoCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
