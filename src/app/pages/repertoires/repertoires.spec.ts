import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repertoires } from './repertoires';

describe('Repertoires', () => {
  let component: Repertoires;
  let fixture: ComponentFixture<Repertoires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Repertoires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Repertoires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
