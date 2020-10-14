import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningsListComponent } from './tranings-list.component';

describe('TraningsListComponent', () => {
  let component: TraningsListComponent;
  let fixture: ComponentFixture<TraningsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraningsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraningsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
