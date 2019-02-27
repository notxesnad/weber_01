import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompare3Component } from './image-compare3.component';

describe('ImageCompare3Component', () => {
  let component: ImageCompare3Component;
  let fixture: ComponentFixture<ImageCompare3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCompare3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCompare3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
