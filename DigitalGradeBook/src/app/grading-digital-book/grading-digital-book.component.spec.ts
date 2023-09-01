import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingDigitalBookComponent } from './grading-digital-book.component';

describe('GradingDigitalBookComponent', () => {
  let component: GradingDigitalBookComponent;
  let fixture: ComponentFixture<GradingDigitalBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradingDigitalBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradingDigitalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
