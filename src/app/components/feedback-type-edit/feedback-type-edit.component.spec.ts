import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTypeEditComponent } from './feedback-type-edit.component';

describe('FeedbackTypeEditComponent', () => {
  let component: FeedbackTypeEditComponent;
  let fixture: ComponentFixture<FeedbackTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackTypeEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
