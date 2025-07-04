import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoireContainer } from './repertoire-container';

describe('RepertoireContainer', () => {
  let component: RepertoireContainer;
  let fixture: ComponentFixture<RepertoireContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepertoireContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepertoireContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
