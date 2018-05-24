import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChildrenComponent } from './demo-children.component';

describe('DemoChildrenComponent', () => {
  let component: DemoChildrenComponent;
  let fixture: ComponentFixture<DemoChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
