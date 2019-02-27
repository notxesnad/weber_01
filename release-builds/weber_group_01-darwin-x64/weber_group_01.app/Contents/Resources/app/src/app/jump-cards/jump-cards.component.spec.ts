import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpCardsComponent } from './jump-cards.component';

describe('JumpCardsComponent', () => {
  let component: JumpCardsComponent;
  let fixture: ComponentFixture<JumpCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
