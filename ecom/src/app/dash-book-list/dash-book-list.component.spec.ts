import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBookListComponent } from './dash-book-list.component';

describe('DashBookListComponent', () => {
  let component: DashBookListComponent;
  let fixture: ComponentFixture<DashBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
