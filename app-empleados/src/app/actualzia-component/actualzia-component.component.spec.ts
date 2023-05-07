import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualziaComponentComponent } from './actualzia-component.component';

describe('ActualziaComponentComponent', () => {
  let component: ActualziaComponentComponent;
  let fixture: ComponentFixture<ActualziaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualziaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualziaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
