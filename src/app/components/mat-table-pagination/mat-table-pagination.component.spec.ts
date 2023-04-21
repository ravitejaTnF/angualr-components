import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTablePaginationComponent } from './mat-table-pagination.component';

describe('MatTablePaginationComponent', () => {
  let component: MatTablePaginationComponent;
  let fixture: ComponentFixture<MatTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTablePaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
