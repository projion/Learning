import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { APIResponseModel, FeedbackType } from '../../model/interface/common';
import { FeedbackTypeService } from '../../service/feedback-type.service';

@Component({
  selector: 'app-feedback-type-edit',
  standalone: true,
  imports: [
    InputTextModule,
    InputSwitchModule,
    ToolbarModule,
    ButtonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './feedback-type-edit.component.html',
  styleUrl: './feedback-type-edit.component.css'
})
export class FeedbackTypeEditComponent implements OnInit {
  feedbackType: FeedbackType = {
    feedbackTypeNo: 0,
    feedbackName: '',
    feedbackCode: '',
    feedbackDesc: '',
    isActive: 1
  };
  feedbackForm: FormGroup;
  constructor(private router: Router, private feedbackTypeService: FeedbackTypeService) {
    this.feedbackForm = new FormGroup({
      feedbackTypeNo: new FormControl(0),
      feedbackName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      feedbackCode: new FormControl(''),
      feedbackDesc: new FormControl(''),
      isActive: new FormControl(true)
    });
  }


  ngOnInit(): void {
    debugger;
    const navigation = this.router.getCurrentNavigation();
    //if (navigation?.extras.state) {
    //  const passedFeedbackType = navigation.extras.state['feedbackType'];
    //  if (passedFeedbackType) {
    //    this.feedbackType = passedFeedbackType;
    const navigationState = history.state;
    if (navigationState && navigationState.feedbackType) {
      this.feedbackType = navigationState.feedbackType;
        this.feedbackForm.patchValue({
          feedbackTypeNo: this.feedbackType.feedbackTypeNo,
          feedbackName: this.feedbackType.feedbackName,
          feedbackCode: this.feedbackType.feedbackCode,
          feedbackDesc: this.feedbackType.feedbackDesc,
          isActive: this.feedbackType.isActive === 1 ? true : false
        });
      }
    }
  //}


  updateData(feedbackType: any) {
    debugger;
    const formvalue = this.feedbackForm.value;
    formvalue.isActive = formvalue.isActive === true ? 1 : 0;

    this.feedbackTypeService.updateFeedbackType(formvalue).subscribe((res: APIResponseModel) => {
      if (res.data) {
        alert("Updated Successfully")
        this.router.navigate(['/feedbacktype']);
      } else {
        alert(res.message);
      }
    })
  }
}
