import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimgComponent } from './addimg.component';

describe('AddimgComponent', () => {
  let component: AddimgComponent;
  let fixture: ComponentFixture<AddimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
