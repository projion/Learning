import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPracticesComponent } from './basic-practices.component';

describe('BasicPracticesComponent', () => {
  let component: BasicPracticesComponent;
  let fixture: ComponentFixture<BasicPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPracticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
