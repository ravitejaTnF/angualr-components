import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloneComponent } from './salone.component';

describe('SaloneComponent', () => {
  let component: SaloneComponent;
  let fixture: ComponentFixture<SaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
