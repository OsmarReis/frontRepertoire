import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSection } from './month-section';

describe('MonthSection', () => {
  let component: MonthSection;
  let fixture: ComponentFixture<MonthSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
