import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NozoomComponent } from './nozoom.component';

describe('NozoomComponent', () => {
  let component: NozoomComponent;
  let fixture: ComponentFixture<NozoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NozoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NozoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
