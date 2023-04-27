import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParatirarComponent } from './paratirar.component';

describe('ParatirarComponent', () => {
  let component: ParatirarComponent;
  let fixture: ComponentFixture<ParatirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParatirarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParatirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
