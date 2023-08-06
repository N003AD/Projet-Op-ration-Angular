import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipeComponentComponent } from './my-pipe-component.component';

describe('MyPipeComponentComponent', () => {
  let component: MyPipeComponentComponent;
  let fixture: ComponentFixture<MyPipeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPipeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
