import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstElementComponent } from './first-element.component';

describe('FirstElementComponent', () => {
  let component: FirstElementComponent;
  let fixture: ComponentFixture<FirstElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
