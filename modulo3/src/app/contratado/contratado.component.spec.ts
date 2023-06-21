import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratadoComponent } from './contratado.component';

describe('ContratadoComponent', () => {
  let component: ContratadoComponent;
  let fixture: ComponentFixture<ContratadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
