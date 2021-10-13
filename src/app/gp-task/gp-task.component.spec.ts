import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpTaskComponent } from './gp-task.component';

describe('GpTaskComponent', () => {
  let component: GpTaskComponent;
  let fixture: ComponentFixture<GpTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
