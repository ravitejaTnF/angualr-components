import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdTestingComponent } from './antd-testing.component';

describe('AntdTestingComponent', () => {
  let component: AntdTestingComponent;
  let fixture: ComponentFixture<AntdTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntdTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntdTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
