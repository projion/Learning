import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTypeCreateComponent } from './feedback-type-create.component';

describe('FeedbackTypeCreateComponent', () => {
  let component: FeedbackTypeCreateComponent;
  let fixture: ComponentFixture<FeedbackTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackTypeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
