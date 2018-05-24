import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticUtilsComponent } from './static-utils.component';

describe('StaticUtilsComponent', () => {
  let component: StaticUtilsComponent;
  let fixture: ComponentFixture<StaticUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
